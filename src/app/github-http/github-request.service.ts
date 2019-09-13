import { Injectable } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {

  user: User;
  constructor(private http: HttpClient) {
    this.user = new User("", "", 0);
  }
  githubRequest(username) {
    interface ApiResponse {
      login: string;
      avatar_url: string;
      public_repos: number;
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>("https://api.github.com/users/"+username+"?access_token="+environment.key).toPromise().then(response => {
        this.user.username = response.login
        this.user.profile = response.avatar_url
        this.user.repoNumber = response.public_repos
        // console.log(this.user)
        resolve()
      },
        error =>{
          reject(error)
})
  })
return promise
}
}
