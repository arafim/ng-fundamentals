* The resolver gets the events using getEvents() method of the eventService, then
* the route.ts takes that and puts it on the route the events property, then
* the EventsListComponent consumes the route data 'events' in ngOnInit() method