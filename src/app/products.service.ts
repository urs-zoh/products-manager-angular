import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  typeProduct: string; //not null
  vendor: string; //not null
  model: string | null; //null
  Price: number; //>100
  photoUrl: string;
  count: number; //>0
  VendorEmail: string; //not null email format
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
    {
      id: 1,
      typeProduct: 'Laptop',
      vendor: 'HP',
      model: 'Pavilion 15',
      Price: 1200,
      photoUrl: 'https://placehold.co/600x400',
      count: 25,
      VendorEmail: 'contact@hp.com',
      description: 'High-performance laptop with 16GB RAM and 512GB SSD.'
    },
    {
      id: 2,
      typeProduct: 'Smartphone',
      vendor: 'Samsung',
      model: 'Galaxy S21',
      Price: 1100,
      photoUrl: 'https://placehold.co/600x400',
      count: 30,
      VendorEmail: 'support@samsung.com',
      description: 'Latest flagship smartphone with a 108MP camera.'
    },
    {
      id: 3,
      typeProduct: 'Tablet',
      vendor: 'Apple',
      model: 'iPad Pro 12.9',
      Price: 1300,
      photoUrl: 'https://placehold.co/600x400',
      count: 15,
      VendorEmail: 'contact@apple.com',
      description: 'Powerful tablet with 512GB storage and Apple M1 chip.'
    },
    {
      id: 4,
      typeProduct: 'Smartwatch',
      vendor: 'Garmin',
      model: 'Fenix 6',
      Price: 500,
      photoUrl: 'https://placehold.co/600x400',
      count: 40,
      VendorEmail: 'support@garmin.com',
      description: 'Durable smartwatch with GPS and heart-rate monitoring.'
    },
    {
      id: 5,
      typeProduct: 'Headphones',
      vendor: 'Sony',
      model: 'WH-1000XM4',
      Price: 350,
      photoUrl: 'https://placehold.co/600x400',
      count: 50,
      VendorEmail: 'support@sony.com',
      description: 'Noise-cancelling headphones with superior sound quality.'
    },
    {
      id: 6,
      typeProduct: 'Monitor',
      vendor: 'Dell',
      model: 'UltraSharp U2720Q',
      Price: 700,
      photoUrl: 'https://placehold.co/600x400',
      count: 20,
      VendorEmail: 'support@dell.com',
      description: '4K monitor with excellent color accuracy for designers.'
    },
    {
      id: 7,
      typeProduct: 'Keyboard',
      vendor: 'Logitech',
      model: 'MX Keys',
      Price: 150,
      photoUrl: 'https://placehold.co/600x400',
      count: 60,
      VendorEmail: 'contact@logitech.com',
      description: 'Wireless keyboard with tactile keys and backlight.'
    },
    {
      id: 8,
      typeProduct: 'External SSD',
      vendor: 'Samsung',
      model: 'T7 Touch',
      Price: 250,
      photoUrl: 'https://placehold.co/600x400',
      count: 35,
      VendorEmail: 'support@samsung.com',
      description: 'Portable SSD with fingerprint security and 1TB storage.'
    },
    {
      id: 9,
      typeProduct: 'Camera',
      vendor: 'Canon',
      model: 'EOS R5',
      Price: 3900,
      photoUrl: 'https://placehold.co/600x400',
      count: 10,
      VendorEmail: 'support@canon.com',
      description: 'Full-frame mirrorless camera with 8K video recording.'
    },
    {
      id: 10,
      typeProduct: 'Printer',
      vendor: 'Epson',
      model: 'EcoTank ET-8550',
      Price: 700,
      photoUrl: 'https://placehold.co/600x400',
      count: 18,
      VendorEmail: 'support@epson.com',
      description: 'Wide-format printer with refillable ink tanks.'
    }
  ];
  constructor() { }
  addProduct(product: Product) {
    this.products.push(product);
  }
  deleteProduct(productId: number): void {
    const productIndex = this.products.findIndex(product => product.id === productId);
    if (productIndex !== -1) {
      this.products.splice(productIndex, 1);  // Remove the product from the array
    }
  }
}
