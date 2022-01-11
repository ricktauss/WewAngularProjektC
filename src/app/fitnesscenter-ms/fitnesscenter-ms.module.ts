import { BarchartComponent } from './feature/contract-statistic/barchart/barchart.component';
import { CommonModule } from '@angular/common';
import { ContractCreateComponent } from './feature/contract-create/contract-create.component';
import { ContractInputValidationErrorComponent } from './feature/contract-validation/contract-input-validation-error.component';
import { ContractNameValidatorDirective } from './feature/contract-validation/contract-name.directive';
import { ContractOutdatedCardComponent } from './feature/contract-search/card/contract-outdated-card.component';
import { ContractSearchComponent } from './feature/contract-search/contract-search.component';
import { ContractStatisticComponent } from './feature/contract-statistic/contract-statistic.component';
import { FITNESSCENTER_MS_ROUTES } from './fitnesscenter-ms-routing.module';
import { FitnessEquipmentAddComponent } from './feature/fitness-equipment-add/fitness-equipment-add.component';
import { FitnessEquipmentEditComponent } from './feature/fitness-equipment-edit/fitness-equipment-edit.component';
import { FitnessEquipmentSearchComponent } from './feature/fitness-equipment-search/fitness-equipment-search.component';
import { MynewHtmlTestComponent } from './feature/mynew-html-test/mynew-html-test.component';
import { NgChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { NgxPrintModule } from 'ngx-print';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FitnessEquipmentSearchComponent,
    FitnessEquipmentAddComponent,
    FitnessEquipmentEditComponent,
    ContractCreateComponent,
    ContractSearchComponent,
    ContractInputValidationErrorComponent,
    ContractNameValidatorDirective,
    ContractStatisticComponent,
    ContractOutdatedCardComponent,
    BarchartComponent,
    MynewHtmlTestComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(FITNESSCENTER_MS_ROUTES),
    NgxPrintModule,
    NgChartsModule
  ]
})
export class FitnesscenterMsModule {}
