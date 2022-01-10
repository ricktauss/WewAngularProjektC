import { Component, OnInit } from '@angular/core';

import { Contract } from '../../entities/contract';
import { ContractService } from '../../data-access/contract.service';

@Component({
  selector: 'flight-contract-search',
  templateUrl: './contract-search.component.html',
  styleUrls: ['./contract-search.component.css'],
})
export class ContractSearchComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  contracts: Array<Contract> = [];
  selectedContract: Contract | null = null;
  message: string = '';
  baseURL: string = 'http://localhost:3000/contracts';

  constructor(private contractService: ContractService) {}

  ngOnInit(): void {
    console.log('ContractSearchComponent created ...');
  }

  select(c: Contract): void {
    this.selectedContract = c;
  }

  search(): void {
    this.contractService
      .search(this.firstName, this.lastName, this.baseURL)
      .subscribe({
        next: (contracts: Contract[]) => {
          this.contracts = contracts;
        },
        error: (errResp) => {
          console.error('Error loading contracts', errResp);
        },
      });
  }

  update(): void {
    this.message = ''; //Delete message when serach is started
    this.contractService
      .update(this.baseURL, this.selectedContract!)
      .subscribe({
        next: (contract) => {
          this.selectedContract = contract;
          this.message = 'Updating contract successful!';
        },
        error: (errResponse) => {
          this.message = 'Error on updating the Contract';
          console.error(this.message, errResponse);
        },
      });
  }

  delete(): void {
    this.message = ''; //Delete message when serach is started

    if (window.confirm('Do you really want to delete the the Contract?')) {

      this.contractService
        .delete(this.baseURL, this.selectedContract!)
        .subscribe({
          next: () => {
            this.selectedContract = null;
            this.search(); //Trigger search to get refreshed list
            this.message = 'Deleting contract successful!';
          },
          error: (errResponse) => {
            this.message = 'Error on deleting the Contract';
            console.error(this.message, errResponse);
          },
        });

    }
  }
}
