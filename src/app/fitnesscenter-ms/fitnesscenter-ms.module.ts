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
import { NgChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { NgxPrintModule } from 'ngx-print';
import { RouterModule } from '@angular/router';
import { MemberSearchComponent } from './feature/member-search/member-search.component';
import { MemberCreateEditComponent } from './feature/member-create-edit/member-create-edit.component';
import { MemberCreateComponent } from './feature/member-create/member-create.component';


import { SharedModule } from '../shared/shared.module';
import {ReactiveFormsModule} from "@angular/forms";
import { CourseSearchComponent } from './feature/course-search/course-search.component';
import { CourseEditComponent } from './feature/course-edit/course-edit.component';
import { CourseAddComponent } from './feature/course-add/course-add.component';
import { CourseUploadComponent } from './feature/course-upload/course-upload.component';


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
    FitnessEquipmentEditComponent,
    MemberSearchComponent,
    MemberCreateEditComponent,
    MemberCreateComponent,
    CourseSearchComponent,
    CourseEditComponent,
    CourseAddComponent,
    CourseUploadComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(FITNESSCENTER_MS_ROUTES),
    NgxPrintModule,
    NgChartsModule,
    ReactiveFormsModule,
  ]
})
export class FitnesscenterMsModule {}
