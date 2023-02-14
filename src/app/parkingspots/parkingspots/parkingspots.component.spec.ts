import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingspotsComponent } from './parkingspots.component';

describe('ParkingspotsComponent', () => {
  let component: ParkingspotsComponent;
  let fixture: ComponentFixture<ParkingspotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingspotsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingspotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
