import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { FirebaseUIModule, firebase, firebaseui } from "firebaseui-angular";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { LoginFirebaseUIComponent } from "./services/login-firebase-ui/login-firebase-ui.component";
import { environment } from "src/environments/environment";
import { TopPageComponent } from "./top/top-page/top-page.component";
import { MainpageComponent } from "./mainpage/mainpage/mainpage.component";
import { CookieService } from "ngx-cookie-service";
import { firebaseConfig } from "secret";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  autoUpgradeAnonymousUsers: false, // 匿名認証ユーザー自動アップグレード
  signInFlow: "redirect", // redirect or popup
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      scopes: [
        "public_profile",
        "email",
        "user_likes",
        "user_friends"
      ],
      customParameters: {
        auth_type: "reauthenticate"
      },
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
    },
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    {
      requireDisplayName: false,
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
    },
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  tosUrl: "aaa",
  privacyPolicyUrl: "",
  signInSuccessUrl: "http://localhost:4200/main-page", // ,"http://localhost:4200/main-page"
  credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM,
  siteName: "evin-web",
};

@NgModule({
  declarations: [
    AppComponent,
    LoginFirebaseUIComponent,
    TopPageComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // 3. Initialize
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    AngularFireModule.initializeApp(firebaseConfig), // angularfireの設定
    AngularFireAuthModule, // angularfireのAuth用モジュール
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),　// FirebaseUIのモジュール
  ],
  providers: [CookieService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
