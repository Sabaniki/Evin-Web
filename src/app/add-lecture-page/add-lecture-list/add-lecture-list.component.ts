import { Component, OnInit } from "@angular/core";
import { AddLectureService } from "../add-lecture.service";

@Component({
  selector: "app-add-lecture-list",
  templateUrl: "./add-lecture-list.component.html",
  styleUrls: ["./add-lecture-list.component.css"]
})
export class AddLectureComponent implements OnInit {

  constructor(public addLectureService: AddLectureService) { }

  ngOnInit() {
  }

  onRegBtn(i: number) {
    alert(i);
  }

}
