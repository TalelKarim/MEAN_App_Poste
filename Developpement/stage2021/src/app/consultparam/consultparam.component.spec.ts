import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultparamComponent } from './consultparam.component';

describe('ConsultparamComponent', () => {
  let component: ConsultparamComponent;
  let fixture: ComponentFixture<ConsultparamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultparamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultparamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
