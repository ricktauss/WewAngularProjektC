import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[EquipmentName]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EquipmentNameDirective,
    multi: true
}]
})
export class EquipmentNameDirective implements Validator{

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    const validCategories: string[] = ['treadmill','ergometer','cross trainer','dumbbells','rowing machine','pull-up bar','weight station','sling trainer','Other'];

    if (control.value && validCategories.indexOf(control.value) === -1){
      return {
        categories: {
          validCategories,
          actualCategory: control.value
        }
      };

    }

    return null;
  }

}
