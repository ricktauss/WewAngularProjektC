import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessEquipmentSearchComponent } from './fitness-equipment-search.component';

describe('FitnessEquipmentSearchComponent', () => {
  let component: FitnessEquipmentSearchComponent;
  let fixture: ComponentFixture<FitnessEquipmentSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitnessEquipmentSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessEquipmentSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
