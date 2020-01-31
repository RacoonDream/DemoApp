import { DummyDataService } from "./../services/dummy-data.service";
import { DataService } from "./../services/data.service";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs";
import { IRaceEvent } from "./../Model/raceEvent";

@Component({
  selector: "app-event-list",
  templateUrl: "./event-list.component.html",
  styleUrls: ["./event-list.component.css"]
})
export class EventListComponent implements OnInit {
  constructor(private dataService: DataService) {}

  eventList: IRaceEvent[];
  errorMessage: string;
  @Output() SelectedEvent: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
    this.dataService.getEventsURL().subscribe(res => (this.eventList = res));
  }

  onEventClicked(payload: string) {
    this.SelectedEvent.emit(payload);
  }
}
