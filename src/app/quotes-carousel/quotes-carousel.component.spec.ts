import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesCarouselComponent } from './quotes-carousel.component';

describe('QuotesCarouselComponent', () => {
  let component: QuotesCarouselComponent;
  let fixture: ComponentFixture<QuotesCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotesCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuotesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
