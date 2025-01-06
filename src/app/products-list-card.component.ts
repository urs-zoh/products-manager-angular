import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, ProductsService } from './products.service';

@Component({
  imports: [CommonModule],
  selector: 'app-products-list-card',
  templateUrl: './products-list-card.component.html',
  styleUrls: ['./products-list-card.component.css']
})
export class ProductsListCardComponent {
  @Input() product!: Product;
  constructor(private productsService: ProductsService) { }
  onDelete(productId: number): void {
    this.productsService.deleteProduct(productId);
  }
}
