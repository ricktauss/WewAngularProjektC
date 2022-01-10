import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberCreateEditComponent } from './member-create-edit.component';

describe('MemberCreateEditComponent', () => {
  let component: MemberCreateEditComponent;
  let fixture: ComponentFixture<MemberCreateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberCreateEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
