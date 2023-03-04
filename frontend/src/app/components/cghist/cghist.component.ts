import { Component, OnInit } from '@angular/core';
import { curRepo } from 'src/app/interfaces/curRepo';
import { commit } from 'src/app/interfaces/commits';
import { DeveloperService } from '../../services/developer.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-cghist',
  templateUrl: './cghist.component.html',
  styleUrls: ['./cghist.component.css']
})
export class CghistComponent {
  currepo:curRepo = {
    name:'',
    description:'',
    owner:{login:''},
    commits:[]
  };
 
  //commits:commit = {
  //  html_url:'',
  //  _commit:{message : ''},
  //  author:
  //  {
  //      name : '',
  //      email: '',
  //      date: '',
  //  } 
  //};
  constructor(
    private developerService:DeveloperService, 
    private router:Router
  ){}
  ngOnInit(){
    this.currepo=this.developerService.getcurrepo();
    console.log(this.currepo);
    if (this.currepo.name == ""  ) {
      this.router.navigate(['']);
    }else{
      this.developerService.getData("repos/"+this.currepo.owner?.login+"/"+this.currepo.name+"/commits").subscribe({
        next: (v) => {
          console.log(v)
          this.currepo.commits = [];
          for (let index = 0; index < v.length; index++) {
            const element = v[index];
            this.currepo.commits?.push(v[index])
          }
          //this.commits = v;
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete  commits') 
      })
    }
  }

}
