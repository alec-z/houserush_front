import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteOrderComponent } from './favourite-order.component';

describe('FavouriteOrderComponent', () => {
  let component: FavouriteOrderComponent;
  let fixture: ComponentFixture<FavouriteOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
