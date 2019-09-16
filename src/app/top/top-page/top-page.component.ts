import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { User } from "src/app/shared/classes/user";

@Component({
  selector: "app-top-page",
  templateUrl: "./top-page.component.html",
  styleUrls: ["./top-page.component.css"]
})
export class TopPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onStartButton() {
    this.router.navigate(["login"]);
  }
}
