import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { GithubRequestService } from '../github-http/github-request.service'


@Component({
  selector: 'app-github-home',
  templateUrl: './github-home.component.html',
  styleUrls: ['./github-home.component.css']
})
export class GithubHomeComponent implements OnInit {

  user: User;
  constructor(private githubService: GithubRequestService) { 
     
  }

  ngOnInit() {
    this.githubService.githubRequest()
    this.user = this.githubService.user
  }

}
