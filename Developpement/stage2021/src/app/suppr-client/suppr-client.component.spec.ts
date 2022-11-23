import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprClientComponent } from './suppr-client.component';

describe('SupprClientComponent', () => {
  let component: SupprClientComponent;
  let fixture: ComponentFixture<SupprClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
