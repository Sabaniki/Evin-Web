import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginFirebaseUIComponent } from "./services/login-firebase-ui/login-firebase-ui.component";
import { TopPageComponent } from "./top/top-page/top-page.component";
import { MainpageComponent } from "./mainpage/mainpage/mainpage.component";


const routes: Routes = [
  { path: "login", component: LoginFirebaseUIComponent },
  { path: "top-page", component: TopPageComponent },
  { path: "main-page", component: MainpageComponent },
  { path: "", redirectTo: "/top-page", pathMatch: "prefix" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
