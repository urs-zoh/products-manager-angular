import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from './products.service';
import { ProductsListCardComponent } from './products-list-card.component';

@Component({
  selector: 'app-products-list',
  imports: [CommonModule, ProductsListCardComponent],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  constructor(readonly productsService: ProductsService) { }
  ngOnInit(): void {

  }
}
