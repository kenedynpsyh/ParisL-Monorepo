import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DemoNgZorroAntdModule } from './ng-zorro.module';
import { ButtonProviderComponent } from './ui/button-provider/button-provider.component';
import { ButtonComponent } from './ui/button/button.component';
import { InputDialogComponent } from './ui/input-dialog/input-dialog.component';
import { InputComponent } from './ui/input/input.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { TextComponent } from './ui/text/text.component';

@NgModule({
  imports: [CommonModule, FormsModule, DemoNgZorroAntdModule],
  exports: [
    NavbarComponent,
    ButtonComponent,
    InputComponent,
    InputDialogComponent,
    TextComponent,
    ButtonProviderComponent,
  ],
  declarations: [
    NavbarComponent,
    ButtonComponent,
    InputComponent,
    InputDialogComponent,
    TextComponent,
    ButtonProviderComponent,
  ],
})
export default class TestComponentModule {}
