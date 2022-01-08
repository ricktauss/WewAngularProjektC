import { Component, OnInit } from '@angular/core';
import { FitnessEquipmentService } from '../../data-access/fitness-equipment.service';
import { FitnessEquipment } from '../../entities/fitnessEquipment';

@Component({
  selector: 'flight-fitness-equipment-edit',
  templateUrl: './fitness-equipment-edit.component.html',
  styleUrls: ['./fitness-equipment-edit.component.css']
})
export class FitnessEquipmentEditComponent implements OnInit {

  id:number=0;
  equipmentName: string = "Laufband";
  dateBought: string = '19.12.2021';
  price:number = 0;

  

  constructor(private fitnessEquipmentService: FitnessEquipmentService) {
    console.log("Fitness Equipment Component was created!")
   }


   save():void{
    
    const fitnessEquipment:FitnessEquipment = {
      id:this.id,
      dateBought:this.dateBought,
      equipmentName:this.equipmentName,
      price:this.price
    }
      console.log("i was here!!!1")
     this.fitnessEquipmentService.addEquipment(fitnessEquipment).subscribe({

      error:(errResp) => {
        console.log("Error Loading Fitness Equipment Devices",errResp);
      }
    })
   }

  ngOnInit(): void {
  }

}
