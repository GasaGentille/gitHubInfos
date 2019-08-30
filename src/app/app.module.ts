import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubFormComponent } from './github-form/github-form.component';
// 
import{ HttpClientModule } from '@angular/common/http';
import{ FormsModule }from '@angular/forms';
import { GithubHomeComponent } from './github-home/github-home.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubFormComponent,
    GithubHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // 
    FormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
