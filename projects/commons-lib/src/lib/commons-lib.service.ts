import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICommonProduct } from './models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CommonsLibService {
  // Una libreria es necesario compilar el proyecto para utilizarlo.


  private _products: ICommonProduct[] = [];

  private _channelSource = new BehaviorSubject<number>(0);
  _channelPayment$ = this._channelSource.asObservable();

  sendData(product: ICommonProduct): void {
    this._products.push(product);
    localStorage.setItem('products', JSON.stringify(this._products));
    this._channelSource.next(this._products.length);
  }

}
