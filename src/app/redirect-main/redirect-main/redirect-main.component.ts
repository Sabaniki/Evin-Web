import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-redirect-main",
  templateUrl: "./redirect-main.component.html",
  styleUrls: ["./redirect-main.component.css"]
})
export class RedirectMainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  toMainPage() {
    this.router.navigate(["/しのさんの乳首は緑色"]);
  }
}
