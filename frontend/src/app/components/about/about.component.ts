import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { DeveloperService } from '../../services/developer.service';


import { curRepo } from 'src/app/interfaces/curRepo';
import { developer } from 'src/app/interfaces/developer';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  {  
    softdev :developer = {
      name: '', 
      username: '', 
      email: '',
      repo: ''
    };

    githubinfo = {
      avatar_url:'',
      name:'',
      login:'',
      bio:'',
      html_url:'',
      repos:[{name:''}]
    }
    constructor(
      private developerService:DeveloperService,
      private router:Router
      ){}
    
    //beginc call back to get all github user information.
    ngOnInit(){
      if(this.githubinfo.login == ''){
        this.getDeveloper();
      } 
    }
    //1 get from backend developer data
    getDeveloper(){
      this.developerService.getDeveloper().subscribe({
        next: (v) => {
          this.softdev=v;
          this.getgitinfo();
        },
        error: (e) => console.error(e),
        complete: () => {} 
      })
    }
    //2 get from git api the user information
    getgitinfo(){
      this.developerService.getData("users/"+this.softdev.username).subscribe({
        next: (v) => {
          this.githubinfo =v;
          this.getgitrepos();
        },
        error: (e) => console.error(e),
        complete: () => {}
      })
    }
    //3 get from github api all the repositories from user
    getgitrepos(){
      this.developerService.getData("users/"+this.softdev.username+"/repos").subscribe({
        next: (v) => {
          this.githubinfo.repos = [];
          this.githubinfo.repos = v;
          //3.5 set current repo default 
          this.developerService.setcurrentrepo(this.githubinfo.repos[0]);
        },
        error: (e) => console.error(e),
        complete: () => {} 
      })
    }

    //go to selected repo
    gotorepo(obj:curRepo){
      this.developerService.setcurrentrepo(obj);
      //move to commit history
      this.router.navigate(['/gitcommit']);
    }
}
