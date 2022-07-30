import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private readonly router: Router) {}

  onRouter(path: string) {
    this.router.navigateByUrl(path);
  }

  ngOnInit(): void {}
}
