import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

import { Directive } from '@angular/core';

@Directive({
  selector: '[contractName]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ContractNameValidatorDirective,
      multi: true,
    },
  ],
})
export class ContractNameValidatorDirective implements Validator {
  minLength = 3;
  maxLength = 100;

  constructor() {}

  validate(control: AbstractControl): ValidationErrors | null {
    const testRegEx = new RegExp('[^A-zß-üÄ-Ü .]');

    if (control.dirty) {
      if (control.value.match(testRegEx)) {
        return { nameCharacters: 'Letters, Spaces and Dots' };
      } else if (
        control.value.length < this.minLength ||
        control.value.length > this.maxLength
      ) {
        return {
          nameLength: { minLength: this.minLength, maxLength: this.maxLength },
        };
      }
    }
    return null;
  }
}
