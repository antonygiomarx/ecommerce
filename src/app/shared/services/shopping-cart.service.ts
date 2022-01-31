import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from 'src/app/pages/products/interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  products: Product[] = [];

  private cartSubject = new Subject<Product[]>();

  private totalSubject = new Subject<number>();

  private quantitySubject = new Subject<number>();

  get totalAction$() {
    return this.totalSubject.asObservable();
  }

  get quantityAction$() {
    return this.quantitySubject.asObservable();
  }

  get cartAction$() {
    return this.cartSubject.asObservable();
  }

  constructor() {}

  updateCart(product: Product) {
    this.addToCart(product);
  }

  private addToCart(product: Product) {
    this.products = [...this.products, product];
    this.calcQuantity();
    this.calcTotal();
    this.cartSubject.next(this.products);
  }

  private calcQuantity() {
    const quantity = this.products.length;
    this.quantitySubject.next(quantity);
  }

  private calcTotal() {
    const total = this.products.reduce((acc, product) => {
      return (acc += product.price);
    }, 0);

    this.totalSubject.next(total);
  }
}
