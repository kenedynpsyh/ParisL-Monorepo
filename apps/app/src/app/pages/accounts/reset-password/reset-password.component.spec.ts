import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UserEffect } from '../../../services/effects/user-effect';
import { UIComponentModule } from '../../../services/prefix/ui-component';
import { messageReducer } from '../../../store/reducers/message-reducer';
import { userReducer } from '../../../store/reducers/user-reducer';
import { ResetPasswordComponent } from './reset-password.component';

describe('ResetPasswordComponent', () => {
  let component: ResetPasswordComponent;
  let fixture: ComponentFixture<ResetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        UIComponentModule,
        StoreModule.forRoot({
          user: userReducer,
          message: messageReducer,
        }),
        EffectsModule.forRoot([UserEffect]),
      ],
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(ResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change email address', () => {
    const fixtures = TestBed.createComponent(ResetPasswordComponent);
    fixtures.detectChanges();
    fixtures.componentInstance.changeToken('resetEmail@yahoo.com');
    fixtures.detectChanges();
    const email =
      fixtures.nativeElement.querySelector('#test-email-field').value;
    expect(email).toEqual('resetEmail@yahoo.com');
  });
});
