import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindepotComponent } from './admindepot.component';

describe('AdmindepotComponent', () => {
  let component: AdmindepotComponent;
  let fixture: ComponentFixture<AdmindepotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindepotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
