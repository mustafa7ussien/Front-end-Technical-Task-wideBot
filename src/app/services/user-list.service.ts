import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private _http:HttpClient) { }
  loader=new BehaviorSubject<boolean>(true);   

  getUserList():Observable<any>
  {
    return this._http.get("https://reqres.in/api/users");
  }
}
