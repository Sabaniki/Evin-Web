import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-mainpage",
  templateUrl: "./mainpage.component.html",
  styleUrls: ["./mainpage.component.css"]
})
export class MainpageComponent implements OnInit {
  constructor(public angularFireAuth: AngularFireAuth, private cookieService: CookieService) { }

  ngOnInit() {

  }

}
