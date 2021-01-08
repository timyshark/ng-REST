import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  testApi$(url : string): Observable <any>{
    console.log(`https://app.alpha.edudate.academy/api/${url}`);
    return this.http.get(`https://app.alpha.edudate.academy/api/${url}`); //,this.httpResponseOptions)
  }

}