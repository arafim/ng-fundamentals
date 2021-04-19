import {Component} from '@angular/core'

@Component({
    templateUrl:'./login.component.html'
})

export class LoginComponent{
    userName: string
    password: string
    login(formValues){
        console.log(formValues)
    }
}