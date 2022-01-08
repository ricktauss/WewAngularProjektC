import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FitnessEquipmentAddComponent } from './fitness-equipment-add.component';



describe('FitnessEquipmentEditComponent', () => {
  let component: FitnessEquipmentAddComponent;
  let fixture: ComponentFixture<FitnessEquipmentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitnessEquipmentAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessEquipmentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
