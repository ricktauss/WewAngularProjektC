import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessEquipmentEditComponent } from './fitness-equipment-edit.component';

describe('FitnessEquipmentEditComponent', () => {
  let component: FitnessEquipmentEditComponent;
  let fixture: ComponentFixture<FitnessEquipmentEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitnessEquipmentEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessEquipmentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
