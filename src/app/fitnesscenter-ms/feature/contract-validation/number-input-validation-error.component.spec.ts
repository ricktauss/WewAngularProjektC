import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberInputValidationErrorComponent } from './number-input-validation-error.component';

describe('NumberInputValidationErrorComponent', () => {
  let component: NumberInputValidationErrorComponent;
  let fixture: ComponentFixture<NumberInputValidationErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberInputValidationErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberInputValidationErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
