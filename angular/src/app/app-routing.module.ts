import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MeComponent} from "./me/me.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: 'me'
  },
  {
    path: 'me',
    component: MeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
