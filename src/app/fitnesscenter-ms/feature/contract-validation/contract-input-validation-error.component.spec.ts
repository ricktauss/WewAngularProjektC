import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractInputValidationErrorComponent } from './contract-input-validation-error.component';

describe('ContractInputValidationErrorComponent', () => {
  let component: ContractInputValidationErrorComponent;
  let fixture: ComponentFixture<ContractInputValidationErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractInputValidationErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractInputValidationErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
