import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Teacher } from "./teacher";
import { auth } from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/firestore";
import { switchMap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class TeacherService {
  teachers$: Observable<Teacher[]>;
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
  ) {
    this.teachers$ = this.afs.collection<Teacher>("teachers").valueChanges();
  }
}
