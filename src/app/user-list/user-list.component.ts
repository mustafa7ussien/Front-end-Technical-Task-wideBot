import { Component, OnInit } from '@angular/core';
import { UserListService } from '../services/user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  result:any;
  result2:any;


  constructor( private _userListServices:UserListService) { }

  ngOnInit(): void {
    this._userListServices.getUserList().subscribe(res =>
      {
        this.result=res.data;
        this.result2=res.support;
        console.log(this.result);
      });
    
  }

}
