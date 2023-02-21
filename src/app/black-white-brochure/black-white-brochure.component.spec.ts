import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackWhiteBrochureComponent } from './black-white-brochure.component';

describe('BlackWhiteBrochureComponent', () => {
  let component: BlackWhiteBrochureComponent;
  let fixture: ComponentFixture<BlackWhiteBrochureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackWhiteBrochureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlackWhiteBrochureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
