import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { LoginComponent } from './services/login/login.component';

const firebaseConfig = {
  apiKey: "AIzaSyBxXe5RoWH3SNr-Mad0A8vQHYlQSHB5gqo",
  authDomain: "evin-web.firebaseapp.com",
  databaseURL: "https://evin-web.firebaseio.com",
  projectId: "evin-web",
  storageBucket: "evin-web.appspot.com",
  messagingSenderId: "598059905928",
  appId: "1:598059905928:web:d4626d17822ac76e61c03d"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // 3. Initialize
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
