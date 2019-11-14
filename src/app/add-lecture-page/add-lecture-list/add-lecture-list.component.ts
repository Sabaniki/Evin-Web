import { Component, OnInit, OnChanges } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Lecture } from "../lecture";
import { AngularFirestore } from "@angular/fire/firestore";
import { LectureService } from "../lecture.service";
import swal from "sweetalert";

@Component({
  selector: "app-add-lecture-list",
  templateUrl: "./add-lecture-list.component.html",
  styleUrls: ["./add-lecture-list.component.css"]
})
export class AddLectureComponent implements OnInit, OnChanges {

  uid: string;
  lectures: Array<Lecture>;
  buttonsState = Array(3).fill(false);
  constructor(
    public lectureService: LectureService,
    public authService: AuthService,
    public afs: AngularFirestore
    ) {
    authService.user$.subscribe(user => this.uid = user.uid);
    lectureService.lectures$.subscribe(lectures => this.lectures = lectures);
  }

  ngOnInit() {
    this.hasUserLectures();
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.hasUserLectures();
  }

  private hasUserLectures() {
    this.authService.user$.subscribe(user => {
      for (let i = 0; i < this.lectures.length; i++) {
        if (user.lectures.lecture === this.lectures[i].lecture) {
          this.buttonsState[i] = true;
        }
      }
    });
  }

  async onRegBtn(i: number) {
    this.afs
    .collection("users")
    .doc(this.uid)
    .update({
      lectures: this.lectures[i]
    })
    .then(() => {
      swal({
        text: "授業を登録しました",
        icon: "success",
      });
      this.buttonsState[i] = true;
    });
  }
}
