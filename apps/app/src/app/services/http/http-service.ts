import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'apps/app/src/environments/environment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable } from 'rxjs';
import cookies from 'cookies-js';

type MethodType = 'post' | 'put' | 'delete' | 'get';

export interface HttpErrorProps {
  error: { message: string };
}

interface HttpProps {
  url: string;
  body?: any;
  method: MethodType;
  authorization?: boolean;
}

type MessageType = 'success' | 'error' | 'info';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private readonly options = {
    headers: {
      Authorization: `Bearer ${cookies.get('kaize::token')}`,
      'Access-Control-Allow-Origin': environment.base_url,
      'Access-Control-Allow-Methods': 'POST,GET,DELETE,PUT',
      'Access-Control-Allow-Headers': 'Content-Type, x-requested-with',
    },
  };
  constructor(
    private readonly http: HttpClient,
    private readonly message: NzMessageService
  ) {}

  /**
   * httpControl
   */
  public httpControl(context: HttpProps): Observable<Object> {
    if (context.method === 'post' || context.method === 'put') {
      return this.http[context.method](
        `${environment.base_url}${context.url}`,
        context.body,
        this.options
      );
    } else if (context.method === 'delete') {
      return this.http[context.method](
        `${environment.base_url}${context.url}`,
        this.options
      );
    } else {
      return this.http[context.method](
        `${environment.base_url}${context.url}`,
        this.options
      );
    }
  }

  /**
   * message
   */
  public createMessage(type: MessageType, content: string) {
    this.message.create(type, content);
  }
}
