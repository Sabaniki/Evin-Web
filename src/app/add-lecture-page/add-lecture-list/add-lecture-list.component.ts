import { Component, OnInit } from "@angular/core";
import { LectureService } from "../lecture.service";
import { AuthService } from "src/app/services/auth.service";
import { Lecture } from "../lecture";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { User } from "src/app/shared/classes/user";

@Component({
  selector: "app-add-lecture-list",
  templateUrl: "./add-lecture-list.component.html",
  styleUrls: ["./add-lecture-list.component.css"]
})
export class AddLectureComponent implements OnInit {
  lectures: Observable<Array<Lecture>>;
  private usersCollection: AngularFirestoreCollection<User>;
  private uid: string;
  /** コレクションのObservable */
  users: Observable<Array<User>>;

  constructor(
    public lectureService: LectureService,
    public authService: AuthService,
    public afs: AngularFirestore
  ) {
    this.usersCollection = this.afs.collection<User>("users");
  }

  ngOnInit() {
    this.authService.user$.subscribe(userInfo => {
      this.uid = userInfo.uid;
    });
    /** Read: データを参照（ストリームに変換） */
    this.users = this.usersCollection.valueChanges();
  }

  onRegBtn(index: number) {
    let updateUser: User;
  }
}
