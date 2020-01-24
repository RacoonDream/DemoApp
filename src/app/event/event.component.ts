import { IRaceEvent } from './../Model/raceEvent';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor() { }


   @Input() eventObj: IRaceEvent;
   @Output() eventClickedEvent: EventEmitter<string> = new EventEmitter<string>();
  // eventObj: IRaceEvent = {
  //   // tslint:disable-next-line: quotemark
  //   eventName: 'FICCI FLO',
  //   city: 'Pune',
  //   eventDesc: 'This event supports women empowerment',
  //   eventDate : new Date('2020-03-02'),
  //   category: '5K,10K'

  // };
  onClick(): void {
    this.eventClickedEvent.emit(this.eventObj.eventName + ' is selected');
      }
  ngOnInit() {
  }


}
