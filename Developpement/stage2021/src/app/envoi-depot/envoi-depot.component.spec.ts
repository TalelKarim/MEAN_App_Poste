import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoiDepotComponent } from './envoi-depot.component';

describe('EnvoiDepotComponent', () => {
  let component: EnvoiDepotComponent;
  let fixture: ComponentFixture<EnvoiDepotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvoiDepotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvoiDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
