import { Component, OnDestroy, OnInit } from '@angular/core';

import { Contract } from '../../entities/contract';
import { ContractService } from '../../data-access/contract.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'contract-statistic',
  templateUrl: './contract-statistic.component.html',
  styleUrls: ['./contract-statistic.component.css'],
})
export class ContractStatisticComponent implements OnInit, OnDestroy {
  contracts: Contract[] | null = null;
  baseURL: string = 'http://localhost:3000/contracts';
  sumMonthFees: number = 0;
  validContracts: Contract[] | null = null;
  outdatedContracts: Contract[] | null = null;

  eventRefreshSubject: Subject<void> = new Subject<void>();

  emitEventRefreshToChild() {
    this.eventRefreshSubject.next();
  }

  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
    console.log('ContractStatisticComponent INIT')
    this.refresh();
  }

  ngOnDestroy(): void {
    console.log('ContractStatisticComponent DESTROY')
  }

  refresh(): void {
    this.getAllContracts();
  }

  getAllContracts() {
    this.contractService.getAll(this.baseURL).subscribe({
      next: (contracts: Contract[]) => {
        this.contracts = contracts;
        console.log('Get all contracts DONE');
        this.createStatistic();
      },
      error: (errResponse) => {
        console.error('Get all contracts failed!', errResponse);
      },
    });
  }

  createStatistic(): void {
    console.log('create');
    const contractsSeperated = JSON.parse(JSON.stringify(this.contractService.checkValidState(this.contracts!)));;
    this.validContracts = contractsSeperated.valid;
    this.outdatedContracts = contractsSeperated.outdated;
    this.sumMonthFees = this.sumAllContracts();
    this.emitEventRefreshToChild();
  }

  sumAllContracts(): number {
    let sum = 0;
    this.validContracts!.forEach(item => {
      sum += Number(item.membershipFee);
    })

    return sum; //return sum of all contracts
  }
}
