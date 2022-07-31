import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpErrorProps,
  HttpService,
} from '../../../services/http/http-service';
import cookies from 'cookies-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() username: string = '';
  @Input() password: string = '';
  @Input() remember: boolean = false;
  @Input() isLoading: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly httpService: HttpService
  ) {}

  onChangeUsername(val: string) {
    this.username = val;
  }

  onChangePassword(val: string) {
    this.password = val;
  }

  clickRememmber() {
    this.remember = !this.remember;
  }

  submit() {
    this.isLoading = true;
    this.httpService
      .httpControl({
        method: 'post',
        url: 'user/login',
        body: { token: this.username, password: this.password },
      })
      .subscribe(
        (res: any) => {
          if (this.remember) {
            cookies.set('email', this.username);
          }
          cookies.set('kaize::token', res.token);
          this.isLoading = false;
          window.location.reload();
        },
        (err: HttpErrorProps) => {
          this.isLoading = false;
          this.httpService.createMessage('error', err.error.message);
        }
      );
  }

  onRouter(path: string) {
    this.router.navigateByUrl(path);
  }

  ngOnInit(): void {
    if (cookies.get('email')) {
      this.username = cookies.get('email');
    }
  }
}
