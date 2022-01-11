import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { CurrencyFormatterPipe } from './pipes/currencyFormatter.pipe';
import { EquipmentNameDirective } from './validation/equipment-name.directive';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    CurrencyFormatterPipe,
    EquipmentNameDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    FormsModule,
    EquipmentNameDirective,
    CurrencyFormatterPipe
  ]
})
export class SharedModule { }
