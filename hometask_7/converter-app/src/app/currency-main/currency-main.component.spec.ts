import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyMainComponent } from './currency-main.component';

describe('CurrencyMainComponent', () => {
  let component: CurrencyMainComponent;
  let fixture: ComponentFixture<CurrencyMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
