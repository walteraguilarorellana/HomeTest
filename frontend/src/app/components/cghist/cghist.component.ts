import { Component, OnInit } from '@angular/core';
import { curRepo } from 'src/app/interfaces/curRepo';
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
 
  constructor(
    private developerService:DeveloperService, 
    private router:Router
  ){}
  ngOnInit(){

    this.currepo=this.developerService.getcurrepo();
    // if not current github info loaded will return to about user.
    if (this.currepo.name == ""  ) {
      this.router.navigate(['']);
    }else{
      // go to get commits from repository
      this.developerService.getData("repos/"+this.currepo.owner?.login+"/"+this.currepo.name+"/commits").subscribe({
        next: (v) => {
          this.currepo.commits = [];
          for (let index = 0; index < v.length; index++) {
            const element = v[index];
            this.currepo.commits?.push(v[index])
          }
        },
        error: (e) => console.error(e),
        complete: () =>{} 
      })
    }
  }

}
