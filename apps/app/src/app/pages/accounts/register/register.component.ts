import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { registerAction$ } from '../../../store/actions/user-action';

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

  constructor(private router: Router, private store: Store) {}

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
    this.store.dispatch(
      registerAction$({
        body: {
          fullname: this.fullname,
          email: this.email,
          password: this.password,
          confirmation: this.confirmation,
        },
      })
    );
  }

  onRouter(path: string) {
    this.router.navigateByUrl(path);
  }

  ngOnInit(): void {}
}
