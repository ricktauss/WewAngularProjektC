import { Component, Input, OnInit } from '@angular/core';

import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'number-input-validation-error',
  templateUrl: './number-input-validation-error.component.html',
  styleUrls: ['./number-input-validation-error.component.css']
})
export class NumberInputValidationErrorComponent implements OnInit {
  @Input() errors: ValidationErrors | null = null;
  @Input() inputValue: number | null = null;

  constructor() { }

  ngOnInit(): void {
    console.log("NumberInputValidationErrorComponent created ...");
  }

}
