import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { UserListService } from "./services/user-list.service";
@Injectable()
export class loaderIntercerptor implements HttpInterceptor
{
   
    constructor(private userlistserv:UserListService)
    {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
    {
        return next.handle(req).pipe
        (
            tap(event =>
                {
                    this.userlistserv.loader.next(true);
                    if(event.type==HttpEventType.Response)
                    {
                        if(event.status==200)
                        {
                            this.userlistserv.loader.next(false);
                             
                        }
                    }
                }
                )
        )
    }
}