import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent implements OnInit {

  products: any;
  productList: Array<Product>;
  dataSource: any;
  currProduct = null;
  currentIdx = -1;
  name = '';
  caloriesCounter: any = 0;
  proteinsCounter: any = 0;
  carbogydratesCounter: any = 0;
  fatsCounter: any = 0;

  nameTerm: string;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.showProducts();
    this.productList = null;
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
    this.productList.push(product);
    this.updateCounters();
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
  updateCounters(): void{
    for(var p of this.productList)
    {
      this.caloriesCounter += p.calories;
      this.proteinsCounter += p.proteins;
      this.carbogydratesCounter += p.carbohydrates;
      this.fatsCounter += p.fats;
    }
  }
}
