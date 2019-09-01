import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

  


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  users = [];
  ngOnInit() {

    var name ="Anoop";
    this.getGithubUsers(this.users);

    this.getGithubUsersUsingAngular()
    .subscribe(response=>{
      console.log(response);
      // this.users = response;
    })
  
  }
  getGithubUsers(users){
    return fetch("https://api.github.com/users")
    .then (function(response){
      return response.json()
    })
    .then(function(body){
      console.log(body)
    });
  }

  getGithubUsersUsingAngular(){
    return this.http.get("https://api.github.com/users");
  }

  tbHeaders= ["LOGIN","ID","NODE_ID","AVATAR_URL","GRAVATAR_ID","URL","HTML_URL","FOLLOWERS_URL","FOLLOWING_URL","GISTS_URL","STARRED_URL","SUBSCRIPTIONS_URL","ORGANIZATIONS_URL","REPOS_URL","EVENTS_URL","RECEIVED_EVENTS_URL","TYPE","SITE_ADMIN"]


}
