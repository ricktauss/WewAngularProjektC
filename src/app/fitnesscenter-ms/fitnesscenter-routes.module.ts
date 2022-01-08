import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FitnessEquipmentSearchComponent } from './feature/fitness-equipment-search/fitness-equipment-search.component';
import { Routes } from '@angular/router';
import { FitnessEquipmentEditComponent } from './feature/fitness-equipment-edit/fitness-equipment-edit.component';


export const FITNESSCENTER_MS_ROUTES: Routes = [
  {
    path: 'fitnessequipment-search',
    component: FitnessEquipmentSearchComponent
  },
  {
    path:'fitnessequipment-edit',
    component:FitnessEquipmentEditComponent
  }
];