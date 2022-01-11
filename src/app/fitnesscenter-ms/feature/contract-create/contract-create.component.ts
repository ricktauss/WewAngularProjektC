import { Component, OnInit } from '@angular/core';
import { Contract, initialContract } from '../../entities/contract';

import { ContractService } from '../../data-access/contract.service';

@Component({
  selector: 'contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css'],
})
export class ContractCreateComponent implements OnInit {
  contract: Contract | null = null;
  message: string = '';
  baseURL: string = 'http://localhost:3000/contracts';

  constructor(private contractService: ContractService) {}

  ngOnInit(): void {
    this.contract = initialContract;
    console.log("ContractCreateComponent created ...");
  }

  create(): void {
    this.message = ''; //Delete message when serach is started

    if (window.confirm('Do you really want to create the the Contract?')) {

      this.contractService.create(this.baseURL, this.contract!).subscribe({
        next: () => {
          console.log("Contract successful created")
          this.contract = initialContract; //Init contract information
          this.message = 'Contract successful created!';
        },
        error: (errResponse) => {
          this.message = 'Error on creating the Contract';
          console.error(this.message, errResponse);
        },
      });

    }

  }
}
