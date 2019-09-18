import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";
import { AngularFireStorage } from "@angular/fire/storage";

@Component({
  selector: "app-content-page",
  templateUrl: "./content-page.component.html",
  styleUrls: ["./content-page.component.css"]
})
export class ContentPageComponent implements OnInit {
  constructor(public angularFireAuth: AngularFireAuth,
              public cookieService: CookieService,
              public afStorage: AngularFireStorage) { }

  image = new Array<string>();

  ngOnInit() {
    this.afStorage.storage.ref("images").listAll().then(
      value => value.items.forEach(item => {
        item.getDownloadURL().then((image: string) => this.image.push(image));
        }
      )
    );
  }
}
