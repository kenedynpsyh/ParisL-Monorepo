import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { resetAction$ } from '../../../store/actions/user-action';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  @Input() email: string = '';
  @Input() isLoading: boolean = false;

  constructor(private router: Router, private store: Store) {}

  changeToken(val: string) {
    this.email = val;
  }

  submit() {
    this.store.dispatch(
      resetAction$({
        body: { email: this.email },
      })
    );
  }

  ngOnInit(): void {}
}
