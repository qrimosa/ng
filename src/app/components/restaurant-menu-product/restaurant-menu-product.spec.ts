import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantMenuProduct } from './restaurant-menu-product';

describe('RestaurantMenuProduct', () => {
  let component: RestaurantMenuProduct;
  let fixture: ComponentFixture<RestaurantMenuProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantMenuProduct],
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantMenuProduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
