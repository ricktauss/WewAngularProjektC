import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FitnessEquipmentSearchComponent } from './feature/fitness-equipment-search/fitness-equipment-search.component';
import { FitnessEquipmentEditComponent } from './feature/fitness-equipment-edit/fitness-equipment-edit.component';
import { RouterModule } from '@angular/router';
import { FITNESSCENTER_MS_ROUTES } from './fitnesscenter-routes.module';
import { MemberSearchComponent } from './feature/member-search/member-search.component';



@NgModule({
  declarations: [
    FitnessEquipmentSearchComponent,
    FitnessEquipmentEditComponent,
    MemberSearchComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(FITNESSCENTER_MS_ROUTES)
  ]
})
export class FitnesscenterMsModule { }
