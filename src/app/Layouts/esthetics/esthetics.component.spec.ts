import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstheticsComponent } from './esthetics.component';

describe('EstheticsComponent', () => {
  let component: EstheticsComponent;
  let fixture: ComponentFixture<EstheticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstheticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstheticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
