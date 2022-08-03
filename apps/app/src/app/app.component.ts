import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { NzMessageService } from 'ng-zorro-antd/message';
import { messageSelector } from './store/reducers/message-reducer';
import { AppState } from './store/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    private store: Store<AppState>,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {
    this.store.pipe(select(messageSelector)).subscribe((res) => {
      if (res.message) {
        this.message.create(res.type, res.message);
      }
    });
  }
}
