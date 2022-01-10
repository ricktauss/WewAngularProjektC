import { Component, Input, OnInit } from '@angular/core';

import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'contract-input-validation-error',
  templateUrl: './contract-input-validation-error.component.html',
  styleUrls: ['./contract-input-validation-error.component.css']
})
export class ContractInputValidationErrorComponent implements OnInit {
  @Input() errors: ValidationErrors | null = null;
  @Input() inputNumber: number | null = null;
  @Input() mode: number = 0; //0: number input   1: string input

  constructor() { }

  ngOnInit(): void {
    console.log("ContractInputValidationErrorComponent created ...");
  }


}
