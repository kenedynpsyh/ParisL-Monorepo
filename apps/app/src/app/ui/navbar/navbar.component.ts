import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import cookies from 'cookies-js';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public token = cookies.get('kaize::token');

  constructor(private router: Router) {}

  logout() {
    cookies.expire('kaize::token');
    window.location.reload();
  }

  onRouter(path: string) {
    this.router.navigateByUrl(path);
  }

  ngOnInit(): void {
    if (this.token) {
    }
  }
}
