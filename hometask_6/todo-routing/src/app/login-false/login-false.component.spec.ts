import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFalseComponent } from './login-false.component';

describe('LoginFalseComponent', () => {
  let component: LoginFalseComponent;
  let fixture: ComponentFixture<LoginFalseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFalseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFalseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
