import { Component, Inject, OnInit } from '@angular/core';
import jsPDF from 'jspdf';

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
  equipmentName: string = "";
  equipmentCategory:string="";
  equipments: Array<FitnessEquipment> = [];
  selectedEquipment?:FitnessEquipment;
  response:string ="";
 
  
  constructor(private fitnessEquipmentService: FitnessEquipmentService) {
    console.log("Fitness Equipment Component was created!")
   }

   select(e:FitnessEquipment):void{
     this.selectedEquipment = e;
    }

    private init():void{
      this.equipments=[];
      this.selectedEquipment = undefined;
      
    }
    search():void{
    this.response='';
     this.init();
      this.fitnessEquipmentService.search(this.equipmentName,this.equipmentCategory).subscribe({
        next:(equipments:FitnessEquipment[])=> {
          this.equipments = equipments;
        },
        error:(errResp) => {
          console.log("Error Searching Fitness Equipment Devices!",errResp);
          this.response = "Error Searching Fitness Equipment Devices";
        }, complete:()=>{
          console.log("Searching of Fitness Equipment Devices successful.");
          if(this.equipments.length === 0){
            this.response = 'No results have been found in database!'
          }
        }
      })
    }


  ngOnInit(): void {
  }

  
  updateSelection(fitnessEquipment:FitnessEquipment){
    this.response='';
    this.fitnessEquipmentService.editEquipment(fitnessEquipment).subscribe({

      error:(errResp) => {
        console.log("Error Updating Fitness Equipment Device",errResp);
        this.response = "Error Updating Fitness Equipment Device";
      }, complete:()=>{
        console.log("Update of Fitness Equipment Device successful.");
        this.selectedEquipment = undefined;
        this.search();
      }
    })


  }

  deleteSelection(equipmentID:number){
    this.response='';
   
    this.fitnessEquipmentService.deleteEquipment(equipmentID).subscribe({

      error:(errResp) => {
        console.log("Error Deleting Fitness Equipment Device",errResp);
        this.response = "Error Deleting Fitness Equipment Device";
      }, complete:()=>{
        console.log("Deleting of Fitness Equipment Device successful.");
        this.selectedEquipment = undefined;
        this.search();
      }
    })



  }


  printpdf():void{

    const doc = new jsPDF('p','pt','a4');
   
  
    let test = this.equipments[0];
    doc.text(test.equipmentName,10,10)
    doc.save("test.pdf");
   
  }





}


