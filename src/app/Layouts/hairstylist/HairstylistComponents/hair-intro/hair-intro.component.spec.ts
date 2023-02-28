import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairIntroComponent } from './hair-intro.component';

describe('HairIntroComponent', () => {
  let component: HairIntroComponent;
  let fixture: ComponentFixture<HairIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HairIntroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HairIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
