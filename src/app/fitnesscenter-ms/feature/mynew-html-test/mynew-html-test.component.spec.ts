import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MynewHtmlTestComponent } from './mynew-html-test.component';

describe('MynewHtmlTestComponent', () => {
  let component: MynewHtmlTestComponent;
  let fixture: ComponentFixture<MynewHtmlTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MynewHtmlTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MynewHtmlTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
