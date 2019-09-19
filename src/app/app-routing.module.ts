import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainpageComponent } from "./mainpage/mainpage/mainpage.component";
import { ContentPageComponent } from "./content/content-page/content-page.component";
import { AuthGuard } from "./guard/auth.guard";
import { LectureListComponent } from "./letutures-page/lecture-list/lecture-list.component";
import { TeacherListComponent } from "./teachers-page/teacher-list/teacher-list.component";


const routes: Routes = [
  { path: "main-page", component: MainpageComponent },
  { path: "content-page", component: ContentPageComponent, canActivate: [AuthGuard] },
  { path: "lectures-page", component: LectureListComponent, canActivate: [AuthGuard] },
  { path: "teachers-page", component: TeacherListComponent, canActivate: [AuthGuard] },
  { path: "", redirectTo: "/main-page", pathMatch: "prefix" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
