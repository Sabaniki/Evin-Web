import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";
import { FirebaseUISignInSuccessWithAuthResult, FirebaseUISignInFailure } from "firebaseui-angular";
import { Router } from "@angular/router";



@Component({
  selector: "app-login-firebase-ui",
  templateUrl: "./login-firebase-ui.component.html",
  styleUrls: ["./login-firebase-ui.component.css"]
})
export class LoginFirebaseUIComponent implements OnInit {
  user: Observable<firebase.User>;
  uid: string;
  constructor(public angularFireAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    this.user = this.angularFireAuth.authState;
  }

  // ログアウト
  async logout() {
    this.angularFireAuth.auth.signOut();
  }

  // 成功時のコールバック
  successCallback(signInSuccessData: FirebaseUISignInSuccessWithAuthResult) {
    console.log(signInSuccessData);
    this.router.navigate(["main-page"]);
  }

  // 失敗時のコールバック
  async errorCallback(errorData: FirebaseUISignInFailure) {
    console.log(errorData);
  }

}
