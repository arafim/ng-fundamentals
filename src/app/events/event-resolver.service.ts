import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { EventService } from "./shared/event-service"; 

@Injectable()
export class EventResolver implements Resolve<any>{
    constructor(private eventService:EventService){

    }
    resolve(route:ActivatedRouteSnapshot){
        //resolver automatically subscribes to an observable, no need to call subscribe, outside resolver you will have to call subscribe
        return this.eventService.getEvent(route.params['id']) 
    }
}