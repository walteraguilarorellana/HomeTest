import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { developer } from '../interfaces/developer';
import { curRepo } from '../interfaces/curRepo';

//const url of api github
const url:string = "https://api.github.com";

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {
    currepo:curRepo ={
      name:''
    };
    //backend server
    Server_URL:string = 'http://localhost:3000/developer';

    constructor(private http:HttpClient) { }

    //this function return the developer info stored in backend nestjs
    getDeveloper():Observable<developer>{
      return this.http.get<developer>(this.Server_URL);
    }

    //this function get the query from GuiHub API for all components
    getData(info:string):Observable<any>{
      return this.http.get<any>(`${url}/${info}`);
    }

    //this functions are for get and set the selected repository
    setcurrentrepo(obj:curRepo){
      console.log('set setcurrentrepo',obj)
      this.currepo = obj;
    }
    getcurrepo(){
      return this.currepo;
    }
}
