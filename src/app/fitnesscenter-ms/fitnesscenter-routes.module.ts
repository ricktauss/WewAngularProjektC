import { CommonModule } from '@angular/common';
import { ContractCreateComponent } from './feature/contract-create/contract-create.component';
import { ContractSearchComponent } from './feature/contract-search/contract-search.component';
import { ContractStatisticComponent } from './feature/contract-statistic/contract-statistic.component';
import { FitnessEquipmentSearchComponent } from './feature/fitness-equipment-search/fitness-equipment-search.component';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

export const FITNESSCENTER_MS_ROUTES: Routes = [
  {
    path: 'fitnessequipment-search',
    component: FitnessEquipmentSearchComponent
  },
  {
    path: 'contract-search',
    component: ContractSearchComponent
  },
  {
    path: 'contract-creation',
    component: ContractCreateComponent
  },
  {
    path: 'contract-statistic',
    component: ContractStatisticComponent
  },
];
