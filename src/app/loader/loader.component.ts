import { Component, OnInit } from '@angular/core';
import { UserListService } from '../services/user-list.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  loader:boolean | undefined;
  constructor(private userlistser:UserListService) 
  {
    this.userlistser.loader.subscribe(res =>
      {
        this.loader=res;
      })
   }
  

  ngOnInit(): void {

  }

}
