import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FitnessEquipmentSearchComponent } from './feature/fitness-equipment-search/fitness-equipment-search.component';
import { RouterModule } from '@angular/router';
import { FITNESSCENTER_MS_ROUTES } from './fitnesscenter-routes.module';
import { FitnessEquipmentAddComponent } from './feature/fitness-equipment-add/fitness-equipment-add.component';
import { FitnessEquipmentEditComponent } from './feature/fitness-equipment-edit/fitness-equipment-edit.component';
import { NgxPrintModule } from 'ngx-print';



@NgModule({
  declarations: [
    FitnessEquipmentSearchComponent,
    FitnessEquipmentAddComponent,
    FitnessEquipmentEditComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(FITNESSCENTER_MS_ROUTES),
    NgxPrintModule
  ]
})
export class FitnesscenterMsModule { }
