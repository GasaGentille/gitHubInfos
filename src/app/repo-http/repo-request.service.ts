import { Injectable } from '@angular/core';
import { Repository } from '../repository';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { promise } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class RepoRequestService {
  repositories: Repository[];

  constructor(private http: HttpClient) {
    // this.repository = new Repository("", "", new Date());
    this.repositories= [];
  }
  githubRequest() {
    interface ApiResponse {
      name: string;
      html_url: string;
      created_at: Date;
    }

    let promise = new Promise((resolve, reject) =>
      this.http.get<ApiResponse>("https://api.github.com/users/GasaGentille/repos?access_token=" + environment.key).toPromise().then(response => {
      for(var r in response){
        this.repositories.push(response[r])
        resolve()
      }

        
      },
        error => {
          // this.repository.name = "No repository found!"
          reject(error)
        })
        )
return promise
}
}









