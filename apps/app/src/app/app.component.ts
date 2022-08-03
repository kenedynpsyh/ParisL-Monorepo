import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApplicationState } from './store/reducers';
import cookies from 'cookies-js';
import { meAction$ } from './store/actions/user-action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    private message: NzMessageService,
    private store: Store<ApplicationState>
  ) {}

  ngOnInit(): void {
    this.store.subscribe((res) => {
      if (res.message.message) {
        this.message.create(res.message.type, res.message.message);
      }
    });
    if (cookies.get('kaize::token')) {
      this.store.dispatch(meAction$({}));
    }
  }
}
