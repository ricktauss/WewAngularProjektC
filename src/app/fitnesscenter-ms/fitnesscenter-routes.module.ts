import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FitnessEquipmentSearchComponent } from './feature/fitness-equipment-search/fitness-equipment-search.component';
import { Routes } from '@angular/router';
import {MemberSearchComponent} from "./feature/member-search/member-search.component";
import {MemberCreateEditComponent} from "./feature/member-create-edit/member-create-edit.component";
import {MemberCreateComponent} from "./feature/member-create/member-create.component";


export const FITNESSCENTER_MS_ROUTES: Routes = [
  {
    path: 'fitnessequipment-search',
    component: FitnessEquipmentSearchComponent
  },
  {
    path: 'member-search',
    component: MemberSearchComponent
  },
  {
    path: 'member-create-edit',
    component: MemberCreateEditComponent
  },
  {
    path: 'member-create-edit/:id',
    component: MemberCreateEditComponent
  },
  {
    path: 'member-create',
    component: MemberCreateComponent
  },
];
