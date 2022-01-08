import { Component, Inject, OnInit } from '@angular/core';
import { FitnessEquipmentService } from '../../data-access/fitness-equipment.service';
import { FitnessEquipment } from '../../entities/fitnessEquipment';





@Component({
  selector: 'fitness-equipment-search',
  templateUrl: './fitness-equipment-search.component.html',
  providers:[{
      provide:FitnessEquipmentService,
      useClass:FitnessEquipmentService
  }],
  styleUrls: ['./fitness-equipment-search.component.css']
})
export class FitnessEquipmentSearchComponent{
  equipmentName: string = "Laufband";
  equipments: Array<FitnessEquipment> = [];
  selectedEquipment?:FitnessEquipment;
  

  constructor(private fitnessEquipmentService: FitnessEquipmentService) {
    console.log("Fitness Equipment Component was created!")
   }

   select(e:FitnessEquipment):void{
     this.selectedEquipment = e;
    }

    search():void{
      this.fitnessEquipmentService.search(this.equipmentName).subscribe({
        next:(equipments:FitnessEquipment[])=> {
          this.equipments = equipments;
        },
        error:(errResp) => {
          console.log("Error Loading Fitness Equipment Devices",errResp);
        }
      })
    }


  ngOnInit(): void {
  }

}
