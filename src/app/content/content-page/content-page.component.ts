import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { CookieService } from "ngx-cookie-service";
import { AngularFireStorage } from "@angular/fire/storage";
import { SafeResourceUrl, DomSanitizer } from "@angular/platform-browser";
import { AuthService } from "src/app/services/auth.service";

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
    private sanitizer: DomSanitizer,
    private authService: AuthService
  ) { }

  contentPaths = new Array<string>();
  trustPaths = new Array<SafeResourceUrl>();

  ngOnInit() {
    let contentPath: string;
    this.authService.user$.subscribe(user => {
      contentPath = user.lectures.lecture;
      console.log(contentPath);
      this.afStorage.storage.ref(contentPath).listAll().then(value => {
        value.items.forEach(item => {
          item.getDownloadURL().then((path: string) => {
            this.contentPaths.push(path);
          });
        });
      });
    });
  }

  checkPng(url: string): boolean {
    if (url.includes("png")) {
      return true;
    } else {  return false; }
  }
}
