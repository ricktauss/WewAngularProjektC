import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[fitnessAdultValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: AdultValidatorDirective,
    multi: true
  }]
})
export class AdultValidatorDirective  implements Validator{

  constructor() { }



  validate(control: AbstractControl): ValidationErrors | null {
   var currentDate = new Date();
   var birthDate = new Date(control.value);


    if(currentDate.getFullYear() - birthDate.getFullYear() <= 18){
      if(currentDate.getMonth() <= birthDate.getMonth()){
        if(currentDate.getDay() <= birthDate.getDay())
        return {birthdate: true};
      }

    }
    return null;

  }

}
