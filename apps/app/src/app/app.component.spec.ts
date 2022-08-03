import { APP_BASE_HREF } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { UserEffect } from './services/effects/user-effect';
import { PrefixComponentModule } from './services/prefix/prefix-component.module';
import { UIComponentModule } from './services/prefix/ui-component';
import { messageReducer } from './store/reducers/message-reducer';
import { userReducer } from './store/reducers/user-reducer';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        UIComponentModule,
        PrefixComponentModule,
        StoreModule.forRoot({
          user: userReducer,
          message: messageReducer,
        }),
        EffectsModule.forRoot([UserEffect]),
      ],
      declarations: [AppComponent],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('app');
  });
});
