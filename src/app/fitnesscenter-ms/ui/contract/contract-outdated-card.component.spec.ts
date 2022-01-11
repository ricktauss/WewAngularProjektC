import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractOutdatedCardComponent } from './contract-outdated-card.component';

describe('ContractOutdatedCardComponent', () => {
  let component: ContractOutdatedCardComponent;
  let fixture: ComponentFixture<ContractOutdatedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractOutdatedCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractOutdatedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
