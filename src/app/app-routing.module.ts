import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainpageComponent } from "./mainpage/mainpage/mainpage.component";
import { ContentPageComponent } from "./content/content-page/content-page.component";
import { AuthGuard } from "./guard/auth.guard";


const routes: Routes = [
  { path: "main-page", component: MainpageComponent },
  { path: "content-page", component: ContentPageComponent, canActivate: [AuthGuard] },
  { path: "", redirectTo: "/main-page", pathMatch: "prefix" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
