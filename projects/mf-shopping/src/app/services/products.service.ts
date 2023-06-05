import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IProductCard } from '../models/product-card.interface';
import { ProductApiResponse } from '../models/productApiReponse.interface';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private _httpClient: HttpClient) {}

  getProducts() {
    const url = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=30';
    return this._httpClient.get<ProductApiResponse[]>(url).pipe(
      map((response) => {
        console.log(response);
        return response.map<IProductCard>((item) => ({
            urlImage: item.images[0],
            price: item.price,
            name: item.title,
            description: item.description,
          }));
      })
    );
  }



}
