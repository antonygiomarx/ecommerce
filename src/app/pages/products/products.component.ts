import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { Product } from './interfaces/product';
import { ProductService } from './services/products/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products!: Product[];

  constructor(
    private readonly productService: ProductService,
    private readonly shoppingCartService: ShoppingCartService
  ) {}

  ngOnInit(): void {
    this.productService
      .getProducts()
      .pipe(
        tap((products) => {
          console.info(products);
          this.products = products;
        })
      )
      .subscribe();
  }

  addToCart(product: Product): void {
    this.shoppingCartService.updateCart(product);
  }
}
