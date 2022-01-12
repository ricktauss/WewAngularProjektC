import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FitnessEquipment, numberOnly } from '../../entities/fitnessEquipment';

@Component({
  selector: 'fitness-equipment-edit',
  templateUrl: './fitness-equipment-edit.component.html',
  styleUrls: ['./fitness-equipment-edit.component.css']
})
export class FitnessEquipmentEditComponent implements OnInit {

//@Input() item: FitnessEquipment|undefined;
@Input() item:FitnessEquipment|undefined;
@Input() response:string ='';
//@Output() selectedChange = new EventEmitter<boolean>();
@Output() fitnessEquipment = new EventEmitter<FitnessEquipment>();
@Output() equipmentID = new EventEmitter<number>();
 equipment?: FitnessEquipment; //temporary equipment object
 numberOnly:Function;

  constructor() { 
   this.numberOnly = numberOnly;
  }

  ngOnInit(): void {

  this.equipment= Object.assign({}, this.item);
    
  }

  updateEquipment(): void {
    console.log("update Equipment!")
    this.fitnessEquipment.emit(this.equipment);
  }

  deleteEquipment():void{
    console.log("delete Equipment!");
    this.equipmentID.emit(this.equipment?.id);
  }

  ngOnChanges(){
    this.equipment= Object.assign({}, this.item);
  }



}
