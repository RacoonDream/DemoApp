import { DummyDataService } from "./../services/dummy-data.service";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs";
import { IRaceEvent } from "./../Model/raceEvent";

@Component({
  selector: "app-event-list",
  templateUrl: "./event-list.component.html",
  styleUrls: ["./event-list.component.css"]
})
export class EventListComponent implements OnInit {
  constructor(private dummyDataService: DummyDataService) {}

  eventList: Observable<IRaceEvent[]>; // this doesnt work
  //eventList: IRaceEvent[]; //this works
  errorMessage: string;
  @Output() SelectedEvent: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
    //this.eventList = this.dummyDataService.getEvents(); // this works
    this.dummyDataService.getEventsURL().subscribe({
      next: events => {
        return (this.eventList = events); // issue
      },
      error: err => (this.errorMessage = err)
    });
    console.log(this.eventList);
  }

  onEventClicked(payload: string) {
    this.SelectedEvent.emit(payload);
  }
}
