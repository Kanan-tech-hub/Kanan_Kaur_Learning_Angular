import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyCarItem } from './modify-car-item';

describe('ModifyCarItem', () => {
  let component: ModifyCarItem;
  let fixture: ComponentFixture<ModifyCarItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyCarItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyCarItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
