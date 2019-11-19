import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseOrderComponent } from './house-order.component';

describe('HouseOrderComponent', () => {
  let component: HouseOrderComponent;
  let fixture: ComponentFixture<HouseOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
