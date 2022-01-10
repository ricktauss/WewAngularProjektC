import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EquipmentNameDirective } from './validation/equipment-name.directive';




@NgModule({
  declarations: [
    EquipmentNameDirective,
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    FormsModule,
    EquipmentNameDirective,
    
  ]
})
export class SharedModule { }
