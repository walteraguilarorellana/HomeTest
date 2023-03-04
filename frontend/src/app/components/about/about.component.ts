import { Component, OnInit } from '@angular/core';
import { DeveloperService } from '../../services/developer.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  {  
    constructor(private developerService:DeveloperService){}
    ngOnInit(){
      console.log('aqui estamos')
      this.getDeveloper();
    }

    getDeveloper(){
      this.developerService.getDeveloper().subscribe({
        next: (v) => console.log(v),
        error: (e) => console.error(e),
        complete: () => console.info('complete') 
      })
    }
}
