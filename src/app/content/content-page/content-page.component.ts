import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { CookieService } from "ngx-cookie-service";
import { AngularFireStorage } from "@angular/fire/storage";
import { SafeResourceUrl, DomSanitizer } from "@angular/platform-browser";
import { sanitizeIdentifier } from "@angular/compiler";

@Component({
  selector: "app-content-page",
  templateUrl: "./content-page.component.html",
  styleUrls: ["./content-page.component.css"]
})
export class ContentPageComponent implements OnInit {
  constructor(
    public angularFireAuth: AngularFireAuth,
    public cookieService: CookieService,
    public afStorage: AngularFireStorage,
    private sanitizer: DomSanitizer
  ) { }

  contentPaths = new Array<string>();
  trustPaths = new Array<SafeResourceUrl>();

  ngOnInit() {
    this.afStorage.storage.ref("pdfs").listAll().then(
      value => value.items.forEach(item => {
        item.getDownloadURL().then((path: string) =>
          this.trustPaths.push(this.sanitizer.bypassSecurityTrustResourceUrl(path)));
        }
      )
    );
  }
}
