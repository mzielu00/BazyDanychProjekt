import { TokenStorageService } from './../../services/token-storage.service';
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
  product = {
    name: '',
    category: '',
    calories: '',
    proteins: '',
    carbohydrates: '',
    fats: '',
    isSet: '',
    products: '',
  };

  submitted = false;
  setFlag = false;
  products: any;
  productList: Array<Product>;

  productSet: Array<Product>;
  setName: String;
  setCaloriesCounter: any = 0;
  setProteinsCounter: any = 0;
  setCarbohydratesCounter: any = 0;
  setFatsCounter: any = 0;

  dataSource: any;
  currProduct: Product;
  currentIdx = -1;
  name = '';
  caloriesCounter: any = 0;
  proteinsCounter: any = 0;
  carbohydratesCounter: any = 0;
  fatsCounter: any = 0;

  nameTerm: string;
  categoryTerm: string;
  currentUser: any;

  constructor(
    private productService: ProductService,
    private token: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.showProducts();
    this.productList = new Array();
    this.productSet = new Array();
    this.currentUser = this.token.getUser();
  }

  showProducts(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  refresh(): void {
    this.showProducts();
    this.currProduct = null;
    this.currentIdx = -1;
  }

  setProduct(product: any, idx: number): void {
    this.currProduct = product;
    this.currentIdx = idx;
    this.updateCounters();
  }

  removeAll(): void {
    this.productService.deleteProducts().subscribe(
      (response) => {
        console.log(response);
        this.showProducts();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteProduct(name: any): void {
    this.productService.deleteProduct(name).subscribe(
      (response) => {
        console.log(response);
        this.showProducts();
      },
      (err) => {
        console.log(err);
      }
    );
    window.location.reload();
  }
  findProduct(): void {
    this.productService.findProductByName(this.name).subscribe(
      (data) => {
        this.products = data;
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updateCounters(): void {
    this.caloriesCounter = 0;
    this.proteinsCounter = 0;
    this.carbohydratesCounter = 0;
    this.fatsCounter = 0;

    for (var p of this.productList) {
      this.caloriesCounter += p.calories;
      this.proteinsCounter += p.proteins;
      this.carbohydratesCounter += p.carbohydrates;
      this.fatsCounter += p.fats;
    }
  }

  addProductToCalc(currProduct): void {
    this.productList.push(currProduct);

    console.log('im in addProductToCalc');

    this.updateCounters();
  }

  removeFromEaten(product): void {
    let index = this.productList.indexOf(product);
    if (index > -1) {
      this.productList.splice(index, 1);
    }
    this.updateCounters();
  }

  addProductToSet(currProduct): void {
    this.productSet.push(currProduct);
    this.setFlag = true;

    this.updateSetCounters();

    console.log(this.setCaloriesCounter);
  }

  /// sets functions

  saveSet(): void {
    this.submitted = true;
    const data = {
      name: this.setName,
      category: 'set',
      calories: this.setCaloriesCounter,
      proteins: this.setProteinsCounter,
      carbohydrates: this.setCarbohydratesCounter,
      fats: this.setFatsCounter,
      isSet: true,
      products: this.productSet,
      user: this.currentUser.username,
    };
    console.log(data);
    this.productService.addProduct(data).subscribe(
      (response) => {
        console.log(response);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  newSet(): void {
    this.submitted = false;
    this.product = {
      name: '',
      category: '',
      calories: '',
      proteins: '',
      carbohydrates: '',
      fats: '',
      isSet: '',
      products: '',
    };
  }

  updateSetCounters(): void {
    this.setCaloriesCounter = 0;
    this.setProteinsCounter = 0;
    this.setCarbohydratesCounter = 0;
    this.setFatsCounter = 0;

    for (var p of this.productSet) {
      this.setCaloriesCounter += p.calories;
      this.setProteinsCounter += p.proteins;
      this.setCarbohydratesCounter += p.carbohydrates;
      this.setFatsCounter += p.fats;
    }
  }

  deleteSet(): void {
    var counter = this.productSet.length;
    for (let i = 0; i < counter; i++) this.productSet.pop();
    this.setFlag = false;
  }

  resetCounters(): void {
    console.log('im in resetCounters');

    var counter = this.productList.length;

    for (let i = 0; i < counter; i++) this.productList.pop();

    this.updateCounters();
  }
}
