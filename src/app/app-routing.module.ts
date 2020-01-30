import { EventDetailsComponent } from "./event-details/event-details.component";
import { RegistrationComponent } from "./registration/registration.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "registration",
    component: RegistrationComponent
  },
  {
    path: "events/:Id",
    component: EventDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
