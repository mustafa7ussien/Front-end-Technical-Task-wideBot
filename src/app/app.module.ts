import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './loader/loader.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserList1Component } from './user-list1/user-list1.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {loaderIntercerptor} from './loaderInterceptor';
@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    UserListComponent,
    UserList1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:loaderIntercerptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
