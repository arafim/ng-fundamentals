import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector:'event-thumbnail',
    template:`
    <div class="weel hoverwell thumbnail">         
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price: \${{event.price}}</div>
        <div>
            <span>Location: {{event.location.address}}</span>
            <span>&nbsp;</span>
            <span>City: {{event.location.city}}, Country: {{event.location.country}}</span>
        </div>
        <button class="btn btn-primary" (click)="handleClickMe()">Click me!</button>
    </div>
    `
})

export class EventThumbnailComponent{
    @Input() event:any
    @Output() eventClick = new EventEmitter();

    handleClickMe(){
        //You can send just one parameter with emit call, so if you need more than
        //one parameter, wrap them in an object
        this.eventClick.emit(this.event.name);
    }
}