import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramBoxesComponent } from './program-boxes.component';

describe('ProgramBoxesComponent', () => {
  let component: ProgramBoxesComponent;
  let fixture: ComponentFixture<ProgramBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramBoxesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
