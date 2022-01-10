import { CommonModule } from '@angular/common';
import { ContractCreateComponent } from './feature/contract-create/contract-create.component';
import { ContractInputValidationErrorComponent } from './feature/contract-validation/contract-input-validation-error.component';
import { ContractNameValidatorDirective } from './feature/contract-validation/contract-name.directive';
import { FITNESSCENTER_MS_ROUTES } from './fitnesscenter-routes.module';
import { FitnessEquipmentEditComponent } from './feature/fitness-equipment-edit/fitness-equipment-edit.component';
import { FitnessEquipmentSearchComponent } from './feature/fitness-equipment-search/fitness-equipment-search.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FitnessEquipmentSearchComponent,
    FitnessEquipmentEditComponent,
    ContractCreateComponent,
    ContractInputValidationErrorComponent,
    ContractNameValidatorDirective
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(FITNESSCENTER_MS_ROUTES)
  ]
})
export class FitnesscenterMsModule { }
