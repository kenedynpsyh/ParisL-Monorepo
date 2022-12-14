import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UserEffect } from '../../../services/effects/user-effect';
import { UIComponentModule } from '../../../services/prefix/ui-component';
import { messageReducer } from '../../../store/reducers/message-reducer';
import { userReducer } from '../../../store/reducers/user-reducer';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

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

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test create an accounts', () => {
    const fixtures = TestBed.createComponent(RegisterComponent);
    fixtures.detectChanges();
    fixtures.componentInstance.changeFullName('fullname');
    fixtures.componentInstance.changeEmail('email@yahoo.com');
    fixtures.componentInstance.changePassword('password');
    fixtures.componentInstance.changeConfirmation('password');

    fixtures.detectChanges();

    const fullname = fixtures.nativeElement.querySelector(
      '#test-fullname-field'
    ).value;
    const email =
      fixtures.nativeElement.querySelector('#test-email-field').value;
    const password = fixtures.nativeElement.querySelector(
      '#test-password-field'
    ).value;
    const confirmation = fixtures.nativeElement.querySelector(
      '#test-confirmation-field'
    ).value;
    expect(fullname).toEqual('fullname');
    expect(email).toEqual('email@yahoo.com');
    expect(password).toEqual('password');
    expect(confirmation).toEqual('password');
  });
});
