import { Component } from "@angular/core";
import {AngularFirestore} from "@angular/fire/firestore";
import { User } from "./shared/classes/user";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
}
