import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NailIntroComponent } from './nail-intro.component';

describe('NailIntroComponent', () => {
  let component: NailIntroComponent;
  let fixture: ComponentFixture<NailIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NailIntroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NailIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
