import { Component, OnInit } from '@angular/core';
import { IProductCard } from '../models/product-card.interface';
import { ProductService } from '../services/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private _productService: ProductService) {}
  products: IProductCard[] = [];

  ngOnInit(): void {
    this._productService.getProducts().subscribe((response) => {
      this.products = response;
    });
  }
}
