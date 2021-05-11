import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { IUser } from "./user.model";

@Injectable()
export class AuthService {
    currentUser: IUser

    constructor(private http: HttpClient){}

    loginUser(userName: string, password: string) {

        let loginInfo = {username:userName,password:password}
        let options = {headers: new HttpHeaders({'Content-Type':'application/json'})}

        return this.http.post(`/api/login`,loginInfo,options)
        .pipe(tap(data => {
            this.currentUser = <IUser>data['user'];
        }))
        .pipe(catchError(err => {
            return of(false)
        }))
    }
    
    isAuthenticated(){
        return !!this.currentUser;
    }

    checkAuthenticationStatus(){
        this.http.get('/api/currentIdentity')
        .pipe(tap(data => {
                if(data instanceof Object){
                    this.currentUser = <IUser>data;
                }
            }
        ))
        .subscribe()
        
        //--instead of using tap above we could have used subscribe like below.  The benefit of using tap is that
        //--you can remove the .subscribe() from the end and do a return, and that way the caller can do the subscribe instead
        //--Here is how you do it using a subscribe instead:
        // .subscribe(data => {
        //     if(data instanceof Object){
        //         this.currentUser = <IUser>data;
        //     }
        // })
    }

    updateCurrentUser(firstName, lastName){
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
    }
}