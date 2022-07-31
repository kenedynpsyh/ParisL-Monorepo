import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpErrorProps,
  HttpService,
} from '../../../services/http/http-service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  @Input() email: string = '';
  @Input() isLoading: boolean = false;

  constructor(private httpService: HttpService, private router: Router) {}

  changeToken(val: string) {
    this.email = val;
  }

  submit() {
    this.isLoading = true;
    this.httpService
      .httpControl({
        url: 'user/reset',
        method: 'post',
        body: { email: this.email },
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

  ngOnInit(): void {}
}
