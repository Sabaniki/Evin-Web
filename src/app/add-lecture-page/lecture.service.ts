import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Lecture } from "./lecture";
import { auth } from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/firestore";
import { switchMap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class LectureService {
  lectures$: Observable<Array<Lecture>>;
  constructor(private afs: AngularFirestore) {
    this.lectures$ = this.afs.collection<Lecture>("lectures").valueChanges();
  }
}
