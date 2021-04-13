import { Routes } from "@angular/router";
import { Error404Component } from "./errors/404.component";
import { CreateEventComponent } from "./events/create-event.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventRouteActivator } from "./events/event-details/event-route-activator.service";
import { EventListResolver } from "./events/events-list-resolver.service";
import { EventsListComponent } from "./events/events-list.component";

export const appRoutes:Routes = [  //--This gives us intellisense
    {path: 'events/new',component:CreateEventComponent,canDeactivate:['canDeactivateCreateEvent']},
    {path: 'events', component:EventsListComponent, resolve:{events:EventListResolver}},
    {path: 'events/:id', component:EventDetailsComponent, 
     canActivate:[EventRouteActivator]},
    {path: '404', component:Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {path: 'user', loadChildren: () => import('./user/user.module')
    .then(m => m.UserModule)}
]