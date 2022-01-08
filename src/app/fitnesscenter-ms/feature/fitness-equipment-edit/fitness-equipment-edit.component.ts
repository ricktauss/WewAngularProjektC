import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FitnessEquipment } from '../../entities/fitnessEquipment';

@Component({
  selector: 'flight-fitness-equipment-edit',
  templateUrl: './fitness-equipment-edit.component.html',
  styleUrls: ['./fitness-equipment-edit.component.css']
})
export class FitnessEquipmentEditComponent implements OnInit {

//@Input() item: FitnessEquipment|undefined;
@Input() item:FitnessEquipment|undefined;
@Input() selected: boolean = false;
//@Output() selectedChange = new EventEmitter<boolean>();
@Output() fitnessEquipment = new EventEmitter<FitnessEquipment>();
 equipment?: FitnessEquipment; //temporary equipment object

  constructor() { 

  }

  ngOnInit(): void {

  this.equipment= Object.assign({}, this.item);
  console.log(this.equipment.equipmentName + "test1234");
    
  //this.fitnessEquipment.emit(this.item);

  }

  updateEquipment(): void {
    console.log("update Equipment!")
    this.fitnessEquipment.emit(this.equipment);
  }

  ngOnChanges(){
    this.equipment= Object.assign({}, this.item);
  }



}
