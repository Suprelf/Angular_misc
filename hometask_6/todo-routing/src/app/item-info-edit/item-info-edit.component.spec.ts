import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInfoEditComponent } from './item-info-edit.component';

describe('ItemInfoEditComponent', () => {
  let component: ItemInfoEditComponent;
  let fixture: ComponentFixture<ItemInfoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemInfoEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemInfoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
