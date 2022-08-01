import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

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
  }

  onRouter(path: string) {
    this.router.navigateByUrl(path);
  }

  ngOnInit(): void {}
}
