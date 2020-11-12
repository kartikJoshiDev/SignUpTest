import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {



  constructor(private http: HttpClient) { }

  // signUpUser(data){
  //   console.log("Data to submit : ",data);
  // }

  signUpUser(data):Observable<any>{
    return this.http.post<any>('http://54.169.45.113:3006/user/userSignUp',data);
  }

  saveToken(token){
    localStorage.setItem('signUp_User',token);
  }

  getToken(){
    return localStorage.getItem('signUp_User');
  }

}
