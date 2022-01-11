import { ContractCreateComponent } from './feature/contract-create/contract-create.component';
import { ContractSearchComponent } from './feature/contract-search/contract-search.component';
import { ContractStatisticComponent } from './feature/contract-statistic/contract-statistic.component';
import { FitnessEquipmentAddComponent } from './feature/fitness-equipment-add/fitness-equipment-add.component';
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
    path: 'fitnessequipment-add',
    component: FitnessEquipmentAddComponent
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
  }
];
