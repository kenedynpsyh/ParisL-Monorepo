import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  @Input() email: string = '';
  @Input() isLoading: boolean = false;

  constructor(private router: Router) {}

  changeToken(val: string) {
    this.email = val;
  }

  submit() {
    this.isLoading = true;
  }

  ngOnInit(): void {}
}
