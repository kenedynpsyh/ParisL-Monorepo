import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpStateInterface } from '../types/http-types';
import _ from 'lodash';
import cookies from 'cookies-js';
import { environment } from 'apps/app/src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export default class HttpService {
  constructor(private https: HttpClient) {}

  /**
   * httpService
   */
  public httpService(ctx: HttpStateInterface): Observable<Object> {
    let options: any = {
      responseType: 'json',
      headers: {
        Authorization: `Bearer ${cookies.get('kaize::token')}`,
        'Content-Type': 'application/json,multipart/form-data',
      },
    };
    if (ctx.method === 'get' || ctx.method === 'delete') {
      return this.https[ctx.method](
        `${environment.base_url}${ctx.url}`,
        options
      );
    }
    if (!ctx.authenticate) {
      options = _.omit(options, ['headers']);
    }
    return this.https[ctx.method](
      `${environment.base_url}${ctx.url}`,
      ctx.body,
      options
    );
  }
}
