import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmetologyDetailsComponent } from './cosmetology-details.component';

describe('CosmetologyDetailsComponent', () => {
  let component: CosmetologyDetailsComponent;
  let fixture: ComponentFixture<CosmetologyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CosmetologyDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CosmetologyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
