import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTopNavBarComponent } from '.first-top-nav-bar.component';

describe('FirstTopNavBarComponent', () => {
  let component: FirstTopNavBarComponent;
  let fixture: ComponentFixture<FirstTopNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstTopNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstTopNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
