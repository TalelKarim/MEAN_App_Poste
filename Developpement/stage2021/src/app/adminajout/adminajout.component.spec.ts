import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminajoutComponent } from './adminajout.component';

describe('AdminajoutComponent', () => {
  let component: AdminajoutComponent;
  let fixture: ComponentFixture<AdminajoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminajoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminajoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
