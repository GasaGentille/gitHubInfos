import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubFormComponent } from './github-form/github-form.component';
import { format } from 'url';
import { GithubHomeComponent } from './github-home/github-home.component';


const routes: Routes = [
  {path:'github-form', component: GithubFormComponent},
  {path: 'github-home/:username', component: GithubHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
