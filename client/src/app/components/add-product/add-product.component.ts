import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Product';
import { ProductService } from 'src/app/services/product.service';
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
<<<<<<< HEAD

  product= {
=======
  product = {
>>>>>>> ae61b51a7a909044f7dd29afd6ee59bd002d8492
    name: '',
    category: '',
    calories: '',
    proteins: '',
    carbohydrates: '',
    fats: '',
  };
  submitted = false;
<<<<<<< HEAD

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }
=======

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}
>>>>>>> ae61b51a7a909044f7dd29afd6ee59bd002d8492

  newProduct(): void {
    this.submitted = false;
    this.product = {
      name: '',
      category: '',
      calories: '',
      proteins: '',
      carbohydrates: '',
      fats: '',
    };
  }

  saveProduct(): void {
    const data = {
      name: this.product.name,
      category: this.product.category,
      calories: this.product.calories,
      carbohydrates: this.product.carbohydrates,
      fats: this.product.fats,
<<<<<<< HEAD
    }
    this.productService.addProduct(data).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      err => {
=======
    };
    console.log(data);
    this.productService.addProduct(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (err) => {
>>>>>>> ae61b51a7a909044f7dd29afd6ee59bd002d8492
        console.log(err);
      }
    );
  }
}
