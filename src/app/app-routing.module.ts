import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserList1Component } from './user-list1/user-list1.component';

const routes: Routes = [
  {path:'',component:UserListComponent},
  {path:'userlist',component:UserList1Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
