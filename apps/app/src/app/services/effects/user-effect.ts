import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import HttpService from '../https/http-service';
import cookies from 'cookies-js';
import {
  loginAction$,
  meAction$,
  registerAction$,
  resetAction$,
} from '../../store/actions/user-action';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { messageAction$ } from '../../store/actions/message-action';

@Injectable({
  providedIn: 'root',
})
export class UserEffect {
  constructor(
    private router: Router,
    private action$: Actions,
    private http: HttpService
  ) {}

  loginAccount$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loginAction$),
      exhaustMap((action) => {
        return this.http
          .httpService({
            url: 'user/login',
            method: 'post',
            body: action.body,
          })
          .pipe(
            map((res: any) => {
              if (action.body?.rememmber) {
                cookies.set('kaize::email', action.body.token);
              }
              cookies.set('kaize::token', res.token);
              window.location.reload();
              return loginAction$({});
            })
          );
      }),
      catchError((err) =>
        of(
          messageAction$({
            message: { message: err.error.message, type: 'error' },
          })
        )
      )
    );
  });

  createdAccount$ = createEffect(() => {
    return this.action$.pipe(
      ofType(registerAction$),
      exhaustMap((action) => {
        return this.http
          .httpService({
            url: 'user/created',
            method: 'post',
            body: action.body,
          })
          .pipe(
            map((res: any) => {
              this.router.navigateByUrl('/accounts/login');
              return messageAction$({
                message: { message: res.message, type: 'success' },
              });
            })
          );
      }),
      catchError((err) =>
        of(
          messageAction$({
            message: { message: err.error.message, type: 'error' },
          })
        )
      )
    );
  });

  resetAccount$ = createEffect(() => {
    return this.action$.pipe(
      ofType(resetAction$),
      exhaustMap((action) => {
        return this.http
          .httpService({
            url: 'user/reset',
            method: 'post',
            body: action.body,
          })
          .pipe(
            map((res: any) => {
              this.router.navigateByUrl('/accounts/login');
              return messageAction$({
                message: { message: res.message, type: 'success' },
              });
            })
          );
      }),
      catchError((err) =>
        of(
          messageAction$({
            message: { message: err.error.message, type: 'error' },
          })
        )
      )
    );
  });

  meAction$ = createEffect(() => {
    return this.action$.pipe(
      ofType(meAction$),
      exhaustMap(() => {
        return this.http
          .httpService({
            url: 'user/me',
            method: 'get',
            authenticate: true,
          })
          .pipe(
            map((res: any) => {
              return meAction$({ user: res });
            })
          );
      }),
      catchError((err) =>
        of(
          messageAction$({
            message: { message: err.error.message, type: 'error' },
          })
        )
      )
    );
  });
}
