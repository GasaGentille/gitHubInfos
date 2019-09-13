import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { GithubRequestService } from '../github-http/github-request.service'
import { Repository } from '../repository';
import { RepoRequestService } from '../repo-http/repo-request.service';
import{ ActivatedRoute,ParamMap} from '@angular/router';
@Component({
  selector: 'app-github-home',
  templateUrl: './github-home.component.html',
  styleUrls: ['./github-home.component.css']
})
export class GithubHomeComponent implements OnInit {

  user: User;
  repositories:Repository[];
  constructor(private githubService: GithubRequestService, private repoServ: RepoRequestService, private route:ActivatedRoute) { 
    this.githubService = githubService;
     
  }

  ngOnInit() {
    let username = this.route.snapshot.paramMap.get('username')
    this.githubService.githubRequest(username)
    this.user = this.githubService.user
    this.repoServ.githubRequest(username)
    this.repositories=this.repoServ.repositories;
  }

}
