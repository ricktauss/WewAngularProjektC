import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FitnessEquipmentSearchComponent } from './feature/fitness-equipment-search/fitness-equipment-search.component';
import { Routes } from '@angular/router';


export const FITNESSCENTER_MS_ROUTES: Routes = [
  {
    path: 'fitnessequipment-search',
    component: FitnessEquipmentSearchComponent
  }
];