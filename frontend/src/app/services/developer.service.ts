import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

const url = "https://api.github.com/";

export class DeveloperService {

  constructor(private http:HttpClient) { }

  //this function get the query from GuiHub API for all components
 // getData(info:string):Observable<any>{
  //    return this.http.get<any>(url+info);
  //}

}
