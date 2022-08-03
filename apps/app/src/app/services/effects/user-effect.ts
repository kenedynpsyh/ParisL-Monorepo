import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as userActions from '../../store/actions/user-action';
import * as messageActions from '../../store/actions/message-action';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import HttpService from '../https/http-service';
import cookies from 'cookies-js';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserEffect {
  constructor(
    private actions: Actions,
    private http: HttpService,
    private router: Router
  ) {}

  loginAccount$ = createEffect(() => {
    return this.actions.pipe(
      ofType(userActions.loginAction$),
      exhaustMap((action) => {
        console.log(action.body, '<<<<< this effecets');
        return this.http
          .httpService({
            url: 'user/login',
            method: 'post',
            body: action.body,
          })
          .pipe(
            map((res: any) => {
              if (action.body?.remember) {
                cookies.set('kaize::email', action.body.token);
              }
              cookies.set('kaize::token', res.token);
              window.location.reload();
              return userActions.loginAction$({});
            })
          );
      }),
      catchError((err) => {
        console.log(err, 'error');
        return of(
          messageActions.createMessage({
            message: {
              message: err.error.message,
              type: 'error',
            },
          })
        );
      })
    );
  });

  createdAccount$ = createEffect(() => {
    return this.actions.pipe(
      ofType(userActions.registerAction$),
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
              return messageActions.createMessage({
                message: { message: res.message, type: 'success' },
              });
            })
          );
      }),
      catchError((err) =>
        of(
          messageActions.createMessage({
            message: { message: err.error.message, type: 'error' },
          })
        )
      )
    );
  });

  resetAccount$ = createEffect(() => {
    return this.actions.pipe(
      ofType(userActions.resetAction$),
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
              return messageActions.createMessage({
                message: { message: res.message, type: 'success' },
              });
            })
          );
      }),
      catchError((err) =>
        of(
          messageActions.createMessage({
            message: { message: err.error.message, type: 'error' },
          })
        )
      )
    );
  });

  meAction$ = createEffect(() => {
    return this.actions.pipe(
      ofType(userActions.meAction$),
      exhaustMap(() => {
        return this.http
          .httpService({
            url: 'user/me',
            method: 'get',
            authenticate: true,
          })
          .pipe(
            map((res: any) => {
              return userActions.meAction$({ data: res });
            })
          );
      }),
      catchError((err) => {
        return of(
          messageActions.createMessage({
            message: { message: 'false', type: 'error' },
          })
        );
      })
    );
  });
}
