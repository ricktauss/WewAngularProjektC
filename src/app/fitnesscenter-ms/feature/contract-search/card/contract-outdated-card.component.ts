import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

import { Contract } from 'src/app/fitnesscenter-ms/entities/contract';

@Component({
  selector: 'card-contract-outdated',
  templateUrl: './contract-outdated-card.component.html',
  styleUrls: ['./contract-outdated-card.component.css']
})
export class ContractOutdatedCardComponent implements OnInit, OnDestroy {
  @Input() item: Contract | undefined;
  @Input() selected: boolean = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  ngOnInit(): void {
    console.log('ContractOutdatedCard INIT');
  }

  ngOnDestroy(): void {
    console.log('ContractOutdatedCard DESTROY');
  }

  toggleSelection():void {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }

}
