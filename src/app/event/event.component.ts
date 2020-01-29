import { IRaceEvent } from "./../Model/raceEvent";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-event",
  templateUrl: "./event.component.html",
  styleUrls: ["./event.component.css"]
})
export class EventComponent implements OnInit {
  constructor() {}

  @Input() eventObj: IRaceEvent;
  @Output() eventClickedEvent: EventEmitter<string> = new EventEmitter<
    string
  >();

  onClick(): void {
    this.eventClickedEvent.emit(this.eventObj.eventName + " is selected");
  }
  ngOnInit() {}
}
