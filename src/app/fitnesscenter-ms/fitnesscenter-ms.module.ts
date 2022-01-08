import { CommonModule } from '@angular/common';
import { ContractCreateComponent } from './feature/contract-create/contract-create.component';
import { FITNESSCENTER_MS_ROUTES } from './fitnesscenter-routes.module';
import { FitnessEquipmentEditComponent } from './feature/fitness-equipment-edit/fitness-equipment-edit.component';
import { FitnessEquipmentSearchComponent } from './feature/fitness-equipment-search/fitness-equipment-search.component';
import { NgModule } from '@angular/core';
import { NumberInputValidationErrorComponent } from './feature/contract-validation/number-input-validation-error.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FitnessEquipmentSearchComponent,
    FitnessEquipmentEditComponent,
    ContractCreateComponent,
    NumberInputValidationErrorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(FITNESSCENTER_MS_ROUTES)
  ]
})
export class FitnesscenterMsModule { }
