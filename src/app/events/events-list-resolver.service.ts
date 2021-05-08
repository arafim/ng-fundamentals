import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { EventService } from "./shared/event-service";
import {map} from 'rxjs/operators';

@Injectable()
export class EventListResolver implements Resolve<any>{
    constructor(private eventService:EventService){

    }
    resolve(){
        //resolver automatically subscribes to an observable, no need to call subscribe, outside resolver you will have to call subscribe
        return this.eventService.getEvents() 
    }
}