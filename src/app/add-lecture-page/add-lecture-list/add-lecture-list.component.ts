import { Component, OnInit } from "@angular/core";
import { AddLectureService } from "../add-lecture.service";
import { AuthService } from "src/app/services/auth.service";
import { Lecture } from "../lecture";

@Component({
  selector: "app-add-lecture-list",
  templateUrl: "./add-lecture-list.component.html",
  styleUrls: ["./add-lecture-list.component.css"]
})
export class AddLectureComponent implements OnInit {

  constructor(
    public addLectureService: AddLectureService,
    public authService: AuthService) { }

  ngOnInit() {
  }

  onRegBtn(i: number) {
    let shasowLecture: Lecture;

    this.addLectureService.lectures$.subscribe(lecture => console.log(lecture[i].teacher));

    // alert(shasowLecture);
    // this.authService.user$.subscribe(user =>
    //   user.lecture.push(shasowLecture)
    // );

    // this.authService.user$.subscribe(user => alert(user.lecture));
  }
}
