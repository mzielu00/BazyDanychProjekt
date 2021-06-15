import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  product = {
    name: '',
    category: '',
    calories: '',
    proteins: '',
    carbohydrates: '',
    fats: '',
  };
  submitted = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

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
    this.submitted = true;
    const data = {
      name: this.product.name,
      category: this.product.category,
      calories: this.product.calories,
      proteins: this.product.proteins,
      carbohydrates: this.product.carbohydrates,
      fats: this.product.fats,
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
}
