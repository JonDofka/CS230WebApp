import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondTopNavBarComponent } from './second-top-nav-bar.component';

describe('SecondTopNavBarComponent', () => {
  let component: SecondTopNavBarComponent;
  let fixture: ComponentFixture<SecondTopNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondTopNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondTopNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
