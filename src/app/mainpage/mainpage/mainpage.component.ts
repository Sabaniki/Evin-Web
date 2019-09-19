import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";
import { FirebaseUISignInSuccessWithAuthResult, FirebaseUISignInFailure } from "firebaseui-angular";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { AuthService } from "../../services/auth.service";
import { User } from "src/app/shared/classes/user";


@Component({
  selector: "app-mainpage",
  templateUrl: "./mainpage.component.html",
  styleUrls: ["./mainpage.component.css"]
})
export class MainpageComponent implements OnInit {
  user: Observable<User>;
  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit() {

  }

  toContentButton() {
    this.router.navigate(["/content-page"]);
  }

  toLectureList() {
    this.router.navigate(["/lectures-page"]);
  }

  toAddLecture() {
    this.router.navigate(["/add-lectures-page"]);
  }
}
