import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/accounts/login/login.component';
import { RegisterComponent } from './pages/accounts/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { PublicGuardService } from './services/http/guard-service';

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
        canActivate: [PublicGuardService],
      },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [PublicGuardService],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule {}
