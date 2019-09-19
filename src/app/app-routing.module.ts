import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainpageComponent } from "./mainpage/mainpage/mainpage.component";
import { ContentPageComponent } from "./content/content-page/content-page.component";
import { AuthGuard } from "./guard/auth.guard";
import { LectureListComponent } from "./letutures-page/lecture-list/lecture-list.component";
import { AddLectureComponent } from "./add-lecture-page/add-lecture-list/add-lecture-list.component";


const routes: Routes = [
  { path: "main-page", component: MainpageComponent },
  { path: "content-page", component: ContentPageComponent, canActivate: [AuthGuard] },
  { path: "lectures-page", component: LectureListComponent, canActivate: [AuthGuard] },
  { path: "add-lectures-page", component: AddLectureComponent, canActivate: [AuthGuard] },
  { path: "", redirectTo: "/main-page", pathMatch: "prefix" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
