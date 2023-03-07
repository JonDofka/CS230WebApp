import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairDetailsComponent } from './hair-details.component';

describe('HairDetailsComponent', () => {
  let component: HairDetailsComponent;
  let fixture: ComponentFixture<HairDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HairDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HairDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
