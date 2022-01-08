import { CommonModule } from '@angular/common';
import { CurrencyFormatterPipe } from './pipes/currencyFormatter.pipe';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    CurrencyFormatterPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    FormsModule,
    CurrencyFormatterPipe
  ]
})
export class SharedModule { }
