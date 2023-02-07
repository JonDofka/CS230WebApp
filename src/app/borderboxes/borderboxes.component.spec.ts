import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderboxesComponent } from './borderboxes.component';

describe('BorderboxesComponent', () => {
  let component: BorderboxesComponent;
  let fixture: ComponentFixture<BorderboxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorderboxesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorderboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
