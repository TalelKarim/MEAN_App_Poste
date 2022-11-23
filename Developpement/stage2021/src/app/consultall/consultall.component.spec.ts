import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultallComponent } from './consultall.component';

describe('ConsultallComponent', () => {
  let component: ConsultallComponent;
  let fixture: ComponentFixture<ConsultallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
