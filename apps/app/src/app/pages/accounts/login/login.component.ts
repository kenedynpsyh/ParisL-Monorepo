import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private readonly router: Router) {}

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
  }

  onRouter(path: string) {
    this.router.navigateByUrl(path);
  }

  ngOnInit(): void {}
}
