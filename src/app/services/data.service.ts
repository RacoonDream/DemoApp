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
export class DataService {
  private productUrl = "http://localhost:7700/api/events";
  constructor(private http: HttpClient) {}

  // make this work
  getEventsURL(): Observable<IRaceEvent[]> {
    return this.http.get<IRaceEvent[]>(this.productUrl);
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
}
