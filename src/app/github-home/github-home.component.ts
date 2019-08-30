import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { GithubRequestService } from '../github-http/github-request.service'
import { Repository } from '../repository';
import { RepoRequestService } from '../repo-http/repo-request.service';


@Component({
  selector: 'app-github-home',
  templateUrl: './github-home.component.html',
  styleUrls: ['./github-home.component.css']
})
export class GithubHomeComponent implements OnInit {

  user: User;
  repositories:Repository[];
  constructor(private githubService: GithubRequestService, private repoServ: RepoRequestService) { 
     
  }

  ngOnInit() {
    this.githubService.githubRequest()
    this.user = this.githubService.user
    this.repoServ.githubRequest()
    this.repositories=this.repoServ.repositories;
  }

}
