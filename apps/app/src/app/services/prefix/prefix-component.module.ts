import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DemoNgZorroAntdModule } from '../../ng-zorro.module';
import { LoginComponent } from '../../pages/accounts/login/login.component';
import { RegisterComponent } from '../../pages/accounts/register/register.component';
import { ResetPasswordComponent } from '../../pages/accounts/reset-password/reset-password.component';
import { HomeComponent } from '../../pages/home/home.component';
import { messageReducer } from '../../store/reducers/message-reducer';
import { userReducer } from '../../store/reducers/user-reducer';
import { NavbarComponent } from '../../ui/navbar/navbar.component';
import { UserEffect } from '../effects/user-effect';
import HttpService from '../https/http-service';
import { UIComponentModule } from './ui-component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    DemoNgZorroAntdModule,
    UIComponentModule,
    StoreModule.forFeature('user', userReducer),
    StoreModule.forFeature('message', messageReducer),
    EffectsModule.forFeature([UserEffect]),
  ],
  exports: [
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    HomeComponent,
  ],
  declarations: [
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    HomeComponent,
  ],
  providers: [HttpService],
})
export class PrefixComponentModule {}
