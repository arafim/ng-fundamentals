import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent, 
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  UpvoteComponent,
  DurationPipe,
  VoterService,
  LocationValidator,
  EventResolver
} from './events/index'

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent} from './nav/navbar.component';
import { JQ_TOKEN, 
  TOASTER_TOKEN, 
  Toastr,
  CollapsibleWellComponent,
  SimpleModalComponent,
  ModalTriggerDirective
} from './common/index';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

let toastr: Toastr = window['toastr']
let jQuery = window['$']

@NgModule({  
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  declarations:[
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    SimpleModalComponent,
    UpvoteComponent,
    ModalTriggerDirective,
    DurationPipe,
    LocationValidator
  ],
  providers: [
    EventService,
    {provide: TOASTER_TOKEN, useValue: toastr},
    {provide: JQ_TOKEN, useValue: jQuery}, 
    {
      provide:'canDeactivateCreateEvent',
      useValue:checkDirtyState
    },
    EventResolver,
    EventListResolver,
    AuthService,
    VoterService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
    if(component.isDirty)
      return window.confirm('You have not saved this event, do you really want to cancel?')

    return true;
}