import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FitnessEquipmentService } from '../../data-access/fitness-equipment.service';
import { FitnessEquipment, initialFitnessEquipment, numberOnly } from '../../entities/fitnessEquipment';

@Component({
  selector: 'flight-fitness-equipment-add',
  templateUrl: './fitness-equipment-add.component.html',
  styleUrls: ['./fitness-equipment-add.component.css']
})
export class FitnessEquipmentAddComponent implements OnInit {

  addfitnessEquipment:FitnessEquipment|undefined;
  response:string='';
  numberOnly:Function;

  constructor(private fitnessEquipmentService: FitnessEquipmentService, private route : Router) {
   
    this.addfitnessEquipment = Object.assign({},initialFitnessEquipment);
    this.numberOnly=numberOnly;
   }

   save():void{
     this.response ='';
     this.fitnessEquipmentService.addEquipment(this.addfitnessEquipment!).subscribe({
      error:(errResp) => {
       
        console.log("Error Saving Fitness Equipment Device",errResp);
        this.response = 'Error Saving Fitness Equipment';
       
      },complete:()=>{
        console.log('completed');
        this.route.navigate(['/', 'fitnessequipment-search']);
        console.log('Saving Fitness Equipment in DB successful!')
      }
    })
 
   }

   



  ngOnInit(): void {

  }

}
