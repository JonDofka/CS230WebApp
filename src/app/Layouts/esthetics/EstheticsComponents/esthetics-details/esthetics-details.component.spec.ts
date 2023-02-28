import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstheticsDetailsComponent } from './esthetics-details.component';

describe('EstheticsDetailsComponent', () => {
  let component: EstheticsDetailsComponent;
  let fixture: ComponentFixture<EstheticsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstheticsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstheticsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
