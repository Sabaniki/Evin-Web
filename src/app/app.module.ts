import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { MainpageComponent } from "./mainpage/mainpage/mainpage.component";
import { CookieService } from "ngx-cookie-service";
import { firebaseConfig } from "secret";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { ContentPageComponent } from "./content/content-page/content-page.component";
import { LoginFirebaseUIComponent } from "./services/login-firebase-ui/login-firebase-ui.component";
import { AuthGuard } from "./guard/auth.guard";
import { LectureListComponent } from "./letutures-page/lecture-list/lecture-list.component";
import { TeacherListComponent } from "./teachers-page/teacher-list/teacher-list.component";


@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    ContentPageComponent,
    LoginFirebaseUIComponent,
    LectureListComponent,
    TeacherListComponent,
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
  ],
  providers: [CookieService, AuthGuard, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
