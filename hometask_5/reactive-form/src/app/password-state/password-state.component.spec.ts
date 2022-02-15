import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordStateComponent } from './password-state.component';

describe('PasswordStateComponent', () => {
  let component: PasswordStateComponent;
  let fixture: ComponentFixture<PasswordStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
