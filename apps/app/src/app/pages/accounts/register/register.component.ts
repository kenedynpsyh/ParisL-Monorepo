import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  HttpErrorProps,
  HttpService,
} from '../../../services/http/http-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @Input() fullname: string = '';
  @Input() email: string = '';
  @Input() password: string = '';
  @Input() confirmation: string = '';
  @Input() isLoading: boolean = false;

  constructor(private router: Router, private httpService: HttpService) {}

  changeFullName(val: string) {
    this.fullname = val;
  }

  changeEmail(val: string) {
    this.email = val;
  }

  changePassword(val: string) {
    this.password = val;
  }

  changeConfirmation(val: string) {
    this.confirmation = val;
  }

  submit() {
    this.isLoading = true;
    this.httpService
      .httpControl({
        method: 'post',
        url: 'user/created',
        body: {
          fullname: this.fullname,
          email: this.email,
          password: this.password,
          confirmation: this.confirmation,
        },
      })
      .subscribe(
        (res: any) => {
          this.isLoading = false;
          this.httpService.createMessage('success', res.message);
          this.router.navigateByUrl('/accounts/login');
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

  ngOnInit(): void {}
}
