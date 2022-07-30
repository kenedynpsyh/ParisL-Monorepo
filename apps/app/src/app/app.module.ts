import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import AppRoutingModule from './app-routing.module';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { ButtonComponent } from './ui/button/button.component';
import { InputComponent } from './ui/input/input.component';
import { DemoNgZorroAntdModule } from './ng-zorro.module';
import en from '@angular/common/locales/en';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';

import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { InputDialogComponent } from './ui/input-dialog/input-dialog.component';
import { TextComponent } from './ui/text/text.component';
import { LoginComponent } from './pages/accounts/login/login.component';
import { RegisterComponent } from './pages/accounts/register/register.component';
import { ResetPasswordComponent } from './pages/accounts/reset-password/reset-password.component';
import { ButtonProviderComponent } from './ui/button-provider/button-provider.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';

registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
  (key) => antDesignIcons[key]
);

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    NavbarComponent,
    ButtonComponent,
    InputComponent,
    InputDialogComponent,
    TextComponent,
    ButtonProviderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule,
    DragDropModule,
    ScrollingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot([]),
    EffectsModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
