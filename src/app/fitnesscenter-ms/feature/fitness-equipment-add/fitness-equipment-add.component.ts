import { Component, OnInit } from '@angular/core';
import { FitnessEquipmentService } from '../../data-access/fitness-equipment.service';
import { FitnessEquipment } from '../../entities/fitnessEquipment';

@Component({
  selector: 'flight-fitness-equipment-add',
  templateUrl: './fitness-equipment-add.component.html',
  styleUrls: ['./fitness-equipment-add.component.css']
})
export class FitnessEquipmentAddComponent implements OnInit {

  id:number=0;
  equipmentId:number=0;
  equipmentName: string = "Laufband";
  dateBought: string = '19.12.2021';
  price:number = 0;


  constructor(private fitnessEquipmentService: FitnessEquipmentService) {
    console.log("Fitness Equipment Component was created!")
   }

   save():void{
    
    const fitnessEquipment:FitnessEquipment = {
      id:this.id,
      equipmentId:this.equipmentId,
      dateBought:this.dateBought,
      equipmentName:this.equipmentName,
      price:this.price
    }
    
     this.fitnessEquipmentService.addEquipment(fitnessEquipment).subscribe({

      error:(errResp) => {
        console.log("Error Loading Fitness Equipment Devices",errResp);
      }
    })
   }



  ngOnInit(): void {
  }

}
