import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstheticsintroComponent } from './estheticsintro.component';

describe('EstheticsintroComponent', () => {
  let component: EstheticsintroComponent;
  let fixture: ComponentFixture<EstheticsintroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstheticsintroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstheticsintroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
