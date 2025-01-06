import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService, Product } from './products.service';

@Component({
  selector: 'app-products-add-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './products-add-form.component.html',
  styleUrl: './products-add-form.component.css'
})
export class ProductsAddFormComponent {
  newProduct: Product = {
    id: 0,
    typeProduct: '',
    vendor: '',
    model: null,
    Price: 0,
    photoUrl: '',
    count: 0,
    VendorEmail: '',
    description: ''
  };

  constructor(private productsService: ProductsService) { }

  onSubmit() {
    if (this.isFormValid()) {
      // Set the ID for the new product (could be dynamic or auto-generated)
      this.newProduct.id = this.productsService.products.length + 1;

      // Add the product to the service
      this.productsService.addProduct(this.newProduct);

      // Optionally reset the form or show a success message
      alert('Product added successfully!');
    } else {
      alert('Please ensure all fields are filled correctly.');
    }
  }

  isFormValid(): boolean {
    return this.newProduct.typeProduct !== '' && this.newProduct.vendor !== '' &&
      this.newProduct.Price > 100 && this.newProduct.count > 0 &&
      this.newProduct.VendorEmail.includes('@');
  }
}
