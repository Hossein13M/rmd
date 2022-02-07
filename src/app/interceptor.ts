import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable()
export class Interceptor implements HttpInterceptor {
    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const auth = req.clone({
            url: req.url.replace(req.url, environment.rmdAPI + req.url),
        });
        return next.handle(auth);
    }
}
