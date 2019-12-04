import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
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
