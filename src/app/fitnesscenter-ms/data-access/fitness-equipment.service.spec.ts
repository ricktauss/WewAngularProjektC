import { TestBed } from '@angular/core/testing';

import { FitnessEquipmentService } from './fitness-equipment.service';

describe('FitnessEquipmentService', () => {
  let service: FitnessEquipmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FitnessEquipmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
