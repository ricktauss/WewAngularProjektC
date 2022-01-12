import { Component, OnInit } from '@angular/core';

import { Contract } from '../../entities/contract';
import { ContractService } from '../../data-access/contract.service';

@Component({
  selector: 'contract-search',
  templateUrl: './contract-search.component.html',
  styleUrls: ['./contract-search.component.css']
})
export class ContractSearchComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  contracts: Array<Contract> = [];
  selectedContract: Contract | null = null;
  message: string = '';
  baseURL: string = 'http://localhost:3000/contracts';
  outdatedView: boolean = false;

  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
    console.log('ContractSearchComponent created ...');
  }

  select(c: Contract): void {
    this.selectedContract = c;
  }

  search(): void {
    this.selectedContract = null;

    this.contractService
      .search(this.firstName, this.lastName, this.baseURL)
      .subscribe({
        next: (contracts: Contract[]) => {
          this.contracts = contracts;
          this.outdatedView = false;
        },
        error: (errResp) => {
          this.contracts = [];
          this.message = 'Error loading contracts!';
          console.error('Error loading contracts', errResp);
        }
      });
  }

  update(): void {
    this.message = ''; //Delete message when serach is started
    this.contractService
      .update(this.baseURL, this.selectedContract!)
      .subscribe({
        next: (contract) => {
          this.selectedContract = null;
          this.message = 'Updating contract successful!';
        },
        error: (errResponse) => {
          this.message = 'Error on updating the Contract';
          console.error(this.message, errResponse);
        }
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
          }
        });
    }
  }

  getOutdatedContracts(): void {
    this.selectedContract = null;
    this.contracts = [];

    this.contractService.getAll(this.baseURL).subscribe({
      next: (contracts: Contract[]) => {
        const contractsSeperated = JSON.parse(
          JSON.stringify(this.contractService.checkValidState(contracts))
        );
        this.contracts = contractsSeperated.outdated; //get the outdated objects from json return object

        this.contracts.sort(function compare(a, b) {
          let aDate = new Date(a.startTime);
          let bDate = new Date(b.startTime);
          if (aDate > bDate) return 1;
          if (aDate < bDate) return -1;
          return 0;
        }); //Sort with date

        this.outdatedView = true;
      },
      error: (errResp) => {
        console.error('Error loading contracts', errResp);
      }
    });
  }
}
