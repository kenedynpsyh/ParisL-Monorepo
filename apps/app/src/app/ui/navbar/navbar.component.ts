import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import cookies from 'cookies-js';
import { Observable } from 'rxjs';
import { meAction$ } from '../../store/actions/user-action';
import { userDetailSelector } from '../../store/reducers/user-reducer';
import { AppState, UserInitialStateInterface } from '../../store/types';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public token = cookies.get('kaize::token');
  public language: string = 'English - USD';
  public user: Observable<UserInitialStateInterface>;

  public buyerCentral_: boolean = false;
  public domain_: boolean = false;
  public help_: boolean = false;
  public language_: boolean = false;

  constructor(private router: Router, private store: Store<AppState>) {
    this.user = this.store.pipe(select(userDetailSelector));
  }

  changeLanguage(val: string) {
    this.language = val;
  }

  logout() {
    cookies.expire('kaize::token');
    window.location.reload();
  }

  onRouter(path: string) {
    this.router.navigateByUrl(path);
  }

  ngOnInit(): void {
    if (this.token) {
      this.store.dispatch(meAction$({}));
    }
  }
}
