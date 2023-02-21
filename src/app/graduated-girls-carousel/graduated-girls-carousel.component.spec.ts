import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduatedGirlsCarouselComponent } from './graduated-girls-carousel.component';

describe('GraduatedGirlsCarouselComponent', () => {
  let component: GraduatedGirlsCarouselComponent;
  let fixture: ComponentFixture<GraduatedGirlsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraduatedGirlsCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraduatedGirlsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
