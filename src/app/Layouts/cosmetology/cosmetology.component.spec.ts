import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmetologyComponent } from './cosmetology.component';

describe('CosmetologyComponent', () => {
  let component: CosmetologyComponent;
  let fixture: ComponentFixture<CosmetologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CosmetologyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CosmetologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
