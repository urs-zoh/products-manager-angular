import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAddFormComponent } from './products-add-form.component';

describe('ProductsAddFormComponent', () => {
  let component: ProductsAddFormComponent;
  let fixture: ComponentFixture<ProductsAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsAddFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
