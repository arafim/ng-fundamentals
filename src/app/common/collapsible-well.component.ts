import { Component, Input } from "@angular/core";

@Component({
    selector:'collapsible-well' ,
    template:`
        <div (click)="toggleContent()" class="well pointable">
        <h4>
            <ng-content select=".title"></ng-content>
        </h4>
        <ng-content select=".body" *ngIf="visible"></ng-content>
        </div>
    `,
    styles:[]
})

export class CollapsibleWellComponent{
    @Input() title:string;
    visible: boolean = true;

    toggleContent(){
        this.visible = !this.visible;
    }
}