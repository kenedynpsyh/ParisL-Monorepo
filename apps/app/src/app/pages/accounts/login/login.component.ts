import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import cookies from 'cookies-js';
import * as actions from '../../../store/actions/user-action';

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

  constructor(private router: Router, private store: Store) {}

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
    this.store.dispatch(
      actions.loginAction$({
        body: {
          token: this.username,
          password: this.password,
          remember: this.remember,
        },
      })
    );
  }

  onRouter(path: string) {
    this.router.navigateByUrl(path);
  }

  ngOnInit(): void {
    if (cookies.get('kaize::email')) {
      this.username = cookies.get('kaize::email');
    }
  }
}
