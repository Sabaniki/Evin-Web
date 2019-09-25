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
  /** コレクション */
  private usersCollection: AngularFirestoreCollection<User>;
  /** コレクションのObservable */
  users: Observable<User[]>;

  /** 更新するドキュメントID */
  uid: string;

  /** ボタンがdisableかどうか */
  isDisabledDelete = false;
  isDisabledEdit = true;

  /** AngularFirestoreをDI */
  constructor(private afs: AngularFirestore, private authService: AuthService) {
    /** itemsコレクションを取得してitemsCollectionに代入 */
    this.usersCollection = afs.collection<User>("users");
  }

  ngOnInit(): void {
    /** Read: データを参照（ストリームに変換） */
    this.users = this.usersCollection.valueChanges();

    this.authService.user$.subscribe(user => this.uid = user.uid);
  }

  /** Update: データを更新 */
  updateItem(): void {
    let userShadow: User;
    this.usersCollection.doc(this.uid)
    const user = {
      id: this.uid,
      name: this.updatedName.value,
      age: this.updatedAge.value,
    };
    this.usersCollection.doc(this.uid).update(item);
    this.updatedName.setValue("");
    this.updatedAge.setValue("");
    this.uid = null;
    this.isDisabledDelete = false;
    this.isDisabledEdit = true;
  }
}
