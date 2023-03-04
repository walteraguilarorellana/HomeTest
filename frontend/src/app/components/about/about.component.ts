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
    

    ngOnInit(){
      console.log('aqui estamos');
      if(this.githubinfo.login == ''){
        this.getDeveloper();
      } 
      
    }

    getDeveloper(){
      this.developerService.getDeveloper().subscribe({
        next: (v) => {
          this.softdev=v;
          this.getgitinfo();
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete getDeveloper') 
      })
    }

    getgitinfo(){
      this.developerService.getData("users/"+this.softdev.username).subscribe({
        next: (v) => {
          this.githubinfo =v;
          this.getgitrepos();
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete getgitinfo') 
      })
    }
    getgitrepos(){
      this.developerService.getData("users/"+this.softdev.username+"/repos").subscribe({
        next: (v) => {
          this.githubinfo.repos = [];
          this.githubinfo.repos = v;
          this.developerService.setcurrentrepo(this.githubinfo.repos[0]);
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete getgitrepos',this.githubinfo) 
      })
    }
    gotorepo(obj:curRepo){
      this.developerService.setcurrentrepo(obj);
      this.router.navigate(['/gitcommit']);
    }
}
