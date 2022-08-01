import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DemoNgZorroAntdModule } from '../../ng-zorro.module';
import { ButtonProviderComponent } from '../../ui/button-provider/button-provider.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { InputDialogComponent } from '../../ui/input-dialog/input-dialog.component';
import { InputComponent } from '../../ui/input/input.component';
import { TextComponent } from '../../ui/text/text.component';

@NgModule({
  imports: [FormsModule, CommonModule, HttpClientModule, DemoNgZorroAntdModule],
  exports: [
    ButtonComponent,
    InputComponent,
    InputDialogComponent,
    TextComponent,
    ButtonProviderComponent,
  ],
  declarations: [
    ButtonComponent,
    InputComponent,
    InputDialogComponent,
    TextComponent,
    ButtonProviderComponent,
  ],
  providers: [],
})
export class UIComponentModule {}
