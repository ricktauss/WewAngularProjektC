import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[enddateCourseValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EndDateValidatorDirective,
    multi: true
  }]
})
export class EndDateValidatorDirective  implements Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    var currentDate = new Date();
    var endDate = new Date(control.value);

    console.log("test")

    if(currentDate.getTime() > endDate.getTime()){
      console.log(currentDate.getTime());
      console.log(endDate.getTime());
      return {enddate: true};
    }
    return null;

  }

}
