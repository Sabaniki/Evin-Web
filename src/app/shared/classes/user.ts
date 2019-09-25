import { Lecture } from "src/app/add-lecture-page/lecture";

export class User {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  profile?: string;
  lectures?: Array<Lecture>;
}
