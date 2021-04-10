import {Component, Input} from '@angular/core'

@Component({
    selector:'event-thumbnail',
    template:`
    <div class="well hoverwell thumbnail">         
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price: \${{event.price}}</div>
        <div>
            <span>Location: {{event.location.address}}</span>
            
            <span class="pad-left">City: {{event.location.city}}, Country: {{event.location.country}}</span>
        </div>
    </div>
    `,
    styles:[`
        .pad-left {margin-left:10px;}
        .well div {color: #bbb; }
    `]
})

export class EventThumbnailComponent{
    @Input() event:any   

}