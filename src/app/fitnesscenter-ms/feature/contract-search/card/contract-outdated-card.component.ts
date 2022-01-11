import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

import { Contract } from 'src/app/fitnesscenter-ms/entities/contract';

@Component({
  selector: 'contract-outdated-card',
  templateUrl: './contract-outdated-card.component.html',
  styleUrls: ['./contract-outdated-card.component.css']
})
export class ContractOutdatedCardComponent implements OnInit, OnDestroy {
  @Input() item: Contract | undefined;
  @Input() selected: Contract | undefined;
  @Output() selectedChange = new EventEmitter<Contract>();
  

  ngOnInit(): void {
    console.log('ContractOutdatedCard INIT');
  }

  ngOnDestroy(): void {
    console.log('ContractOutdatedCard DESTROY');
  }

  toggleSelection():void {
    this.selectedChange.emit(this.item);
  }

}
