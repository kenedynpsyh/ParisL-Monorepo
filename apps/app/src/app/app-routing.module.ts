import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/accounts/login/login.component';
import { ProfileComponent } from './pages/accounts/profile/profile.component';
import { RegisterComponent } from './pages/accounts/register/register.component';
import { ResetPasswordComponent } from './pages/accounts/reset-password/reset-password.component';
import { HomeComponent } from './pages/home/home.component';
import {
  GuardRouterService,
  PublicRouterService,
} from './services/guard/guard-service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'accounts',
    children: [
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [PublicRouterService],
      },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [PublicRouterService],
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent,
        canActivate: [PublicRouterService],
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [GuardRouterService],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule {}
