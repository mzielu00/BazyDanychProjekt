import { ProductService } from 'src/app/services/product.service';
import { TokenStorageService } from './../../services/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  userProducts: Array<Product>;

  constructor(
    private token: TokenStorageService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.getUserSets();
    this.userProducts = [];
  }

  getUserSets() {
    this.productService.getProducts().subscribe(
      (products) => {
        console.log(products);
        products.forEach((p) => {
          if (p.user == this.currentUser.username) {
            this.userProducts.push(p);
          }
        });
      },
      (err) => {
        console.log(err);
      }
    );

    /*     console.log('produkty: ' + products);
    console.log('userproducts: ' + userProducts); */
  }
}
