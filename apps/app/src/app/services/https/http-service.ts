import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpStateInterface } from '../types/http-types';
import _ from 'lodash';
import cookies from 'cookies-js';

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
      body: ctx.body,
      headers: {
        Authorization: `Bearer ${cookies.get('kaize::token')}`,
        'Content-Type': 'application/json,multipart/form-data',
      },
    };
    if (ctx.method === 'get' || ctx.method === 'delete') {
      options = _.omit(options, ['body']);
    }
    if (!ctx.authenticate) {
      options = _.omit(options, ['headers']);
    }
    return this.https[ctx.method](ctx.url, options);
  }
}
