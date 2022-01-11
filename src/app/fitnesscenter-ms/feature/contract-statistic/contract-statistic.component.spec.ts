import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractStatisticComponent } from './contract-statistic.component';

describe('ContractStatisticComponent', () => {
  let component: ContractStatisticComponent;
  let fixture: ComponentFixture<ContractStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractStatisticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
