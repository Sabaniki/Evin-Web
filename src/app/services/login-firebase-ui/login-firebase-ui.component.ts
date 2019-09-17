import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";
import { FirebaseUISignInSuccessWithAuthResult, FirebaseUISignInFailure } from "firebaseui-angular";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";


@Component({
  selector: "app-login-firebase-ui",
  templateUrl: "./login-firebase-ui.component.html",
  styleUrls: ["./login-firebase-ui.component.css"]
})
export class LoginFirebaseUIComponent implements OnInit {
  user: Observable<firebase.User>;
  constructor(public angularFireAuth: AngularFireAuth,
              private router: Router,
              private cookieService: CookieService) { }

  ngOnInit() {
    this.user = this.angularFireAuth.authState;
    if (this.cookieService.get("uid")) {
      this.router.navigate(["main-page"]);
    }
  }

  // ログアウト
  async logout() {
    this.angularFireAuth.auth.signOut();
  }

  // 成功時のコールバック
  successCallback(signInSuccessData: FirebaseUISignInSuccessWithAuthResult) {
    console.log(signInSuccessData);
    this.cookieService.set("uid", this.angularFireAuth.auth.currentUser.uid);
    this.router.navigate(["main-page"]);
  }

  // 失敗時のコールバック
  async errorCallback(errorData: FirebaseUISignInFailure) {
    console.log(errorData);
  }

}
