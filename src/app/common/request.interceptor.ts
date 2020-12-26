import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({ providedIn: "root" })
export class RequestInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Http Interceptor Called!');

    const requestBody = request.clone();
    return next.handle(requestBody).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        switch (error && error.status) {
          case 403:
            this._403();
            break;

          default:
            break;
        }
        return throwError(error.message);
      })
    );
  }

  private _404() {
    this.router.navigateByUrl('/404');
  }

  private _401() {
    /* this._cookieService.delete(
          "token",
          environment.path,
          window.location.hostname
        );
        this._cookieService.deleteAll(environment.path, window.location.hostname);
        this.delete_cookie("token");
        this.keycloakService.clearToken()
        this.keycloakService.logout(window.location.origin + environment.baseHref); */
  }

  private _403() {
    this.router.navigateByUrl('/access-denied');
  }
}
