import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UserEffect } from '../../../services/effects/user-effect';
import { UIComponentModule } from '../../../services/prefix/ui-component';
import { messageReducer } from '../../../store/reducers/message-reducer';
import { userReducer } from '../../../store/reducers/user-reducer';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        UIComponentModule,
        StoreModule.forRoot({
          user: userReducer,
          message: messageReducer,
        }),
        EffectsModule.forRoot([UserEffect]),
      ],
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change username and password, rememmber', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    fixture.componentInstance.onChangeUsername('username@yahoo.com');
    fixture.componentInstance.onChangePassword('password');
    fixture.componentInstance.clickRememmber();

    fixture.detectChanges();

    const username =
      fixture.nativeElement.querySelector('#test-email-field').value;
    const password = fixture.nativeElement.querySelector(
      '#test-password-field'
    ).value;
    const rememmber = fixture.nativeElement.querySelector(
      '#test-rememmber-field'
    ).ngModel;
    expect(username).toEqual('username@yahoo.com');
    expect(password).toEqual('password');
    expect(rememmber).toEqual(true);
  });
});
