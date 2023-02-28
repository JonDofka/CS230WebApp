import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassageIntroComponent } from './massage-intro.component';

describe('MassageIntroComponent', () => {
  let component: MassageIntroComponent;
  let fixture: ComponentFixture<MassageIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MassageIntroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MassageIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
