import { Observable, of, throwError } from "rxjs";
import { IRaceEvent } from "./../Model/raceEvent";
import { Injectable } from "@angular/core";
import {
  HttpClient,
  JsonpInterceptor,
  HttpErrorResponse
} from "@angular/common/http";
import { tap, catchError } from "rxjs/operators";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DummyDataService {
  private productUrl = "./assets/events.json";
  constructor(private http: HttpClient) {}

  // make this work
  getEventsURL(): Observable<IRaceEvent[]> {
    // return this.http
    //   .get<IRaceEvent[]>(this.productUrl)
    //   .pipe(map((response: any) => response.json()));

    return this.http.get<IRaceEvent[]>(this.productUrl).pipe(
      tap(data => console.log("All: " + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse) {
    let errorMessage = "";
    if (err.error instanceof ErrorEvent) {
      errorMessage = ` an error occured: $(err.error.message)`;
    } else {
      errorMessage = ` Server returned code : ${err.status}, error message is : ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  // This works
  getEvents(): IRaceEvent[] {
    return [
      {
        // tslint:disable-next-line: quotemark
        eventName: "RUN FOR CAT",
        city: "Pune",
        eventDesc: "This event supports Top Cat",
        eventDate: new Date("2020-03-02"),
        category: "5K,10K"
      },
      {
        // tslint:disable-next-line: quotemark
        eventName: "RUN FOR MOUSE",
        city: "Pune",
        eventDesc: "This event supports Jerry",
        eventDate: new Date("2020-02-02"),
        category: "5K,10K"
      }
    ];
  }
}
