import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstheticsCardComponent } from './esthetics-card.component';

describe('EstheticsCardComponent', () => {
  let component: EstheticsCardComponent;
  let fixture: ComponentFixture<EstheticsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstheticsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstheticsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
