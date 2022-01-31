import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mapTo, Observable } from 'rxjs';
import { Product } from '../../interfaces/product';
import { ProductsAPIResponse } from '../../interfaces/product-api-response';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly apiUrl =
    'https://run.mocky.io/v3/57f2620d-7b6b-45ad-bbd9-31b9cff6d695';

  constructor(private readonly http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http
      .get<ProductsAPIResponse>(this.apiUrl)
      .pipe<Product[]>(
        map<ProductsAPIResponse, Product[]>((response) => response.products)
      );
  }
}
