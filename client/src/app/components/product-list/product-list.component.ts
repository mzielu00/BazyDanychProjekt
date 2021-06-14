import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent implements OnInit {

  products: any;
  currProduct = null;
  currentIdx = -1;
  name = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.showProducts();
  }

  showProducts(): void{
    this.productService.getProducts().subscribe(
      data =>
      {
        this.products = data;
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

  refresh(): void {
    this.showProducts();
    this.currProduct = null;
    this.currentIdx = -1;
  }

  setProduct(product: any, idx: number): void{
    this.currProduct = product;
    this.currentIdx = idx;
  }

  removeAll(): void{
    this.productService.deleteProducts().subscribe(
      response => {
        console.log(response);
        this.showProducts();
      },
      err => {
        console.log(err);
      }
    );
  }
  deleteProduct(name: any): void {
    this.productService.deleteProduct(name).subscribe(
      response => {
        console.log(response);
        this.showProducts();
      },
      err => {
        console.log(err);
      }
    );
  }
  findProduct(): void {
    console.log("nazwa ->",this.name);
    this.productService.findProductByName(this.name).subscribe(
      data => {
        this.products = data;
        console.log(data);
      },
      err => {
        console.log(err)
      }
    );
  }

}
