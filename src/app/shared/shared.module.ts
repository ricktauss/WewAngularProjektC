import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { CurrencyFormatterPipe } from './pipes/currencyFormatter.pipe';
import { EquipmentNameDirective } from './validation/equipment-name.directive';
import { NgModule } from '@angular/core';
import { AdultValidatorDirective } from './validation/adult-validator.directive';

@NgModule({
  declarations: [CurrencyFormatterPipe, EquipmentNameDirective, AdultValidatorDirective],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [FormsModule, EquipmentNameDirective, CurrencyFormatterPipe, AdultValidatorDirective]
})
export class SharedModule { }
