import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";
import { FirebaseUISignInSuccessWithAuthResult, FirebaseUISignInFailure } from "firebaseui-angular";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { AuthService } from "../auth.service";


@Component({
  selector: "app-login-firebase-ui",
  templateUrl: "./login-firebase-ui.component.html",
  styleUrls: ["./login-firebase-ui.component.css"]
})

export class LoginFirebaseUIComponent implements OnInit {
  constructor(public auth: AuthService, private router: Router) {
  }

  ngOnInit(): void {

  }

  toMainButton() {
    this.router.navigate(["/main-page"]);
  }
}
