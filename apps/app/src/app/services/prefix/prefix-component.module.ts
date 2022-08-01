import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DemoNgZorroAntdModule } from '../../ng-zorro.module';
import { LoginComponent } from '../../pages/accounts/login/login.component';
import { RegisterComponent } from '../../pages/accounts/register/register.component';
import { ResetPasswordComponent } from '../../pages/accounts/reset-password/reset-password.component';
import { HomeComponent } from '../../pages/home/home.component';
import { NavbarComponent } from '../../ui/navbar/navbar.component';
import { UIComponentModule } from './ui-component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    DemoNgZorroAntdModule,
    UIComponentModule,
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
})
export class PrefixComponentModule {}
