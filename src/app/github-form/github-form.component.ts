import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-github-form',
  templateUrl: './github-form.component.html',
  styleUrls: ['./github-form.component.css']
})
export class GithubFormComponent implements OnInit {
  goToUrl(username){
    this.router.navigate(['/user',username])
  }

  constructor( private router:Router) { }

  ngOnInit() {
  }

}
