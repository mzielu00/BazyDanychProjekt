import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Product';
import { ProductService } from 'src/app/services/product.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product = new Product();
  productForm: FormGroup;
  submitted = false;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.productForm = new FormGroup({
      name: new FormControl(this.product.name, [Validators.required, Validators.pattern(".*\\S.*[a-zA-z]"), Validators.minLength(0)],),
      category: new FormControl(this.product.category,  [Validators.required, Validators.pattern(".*\\S.*[a-zA-z]"), Validators.minLength(0)],),
      calories: new FormControl(this.product.calories, [Validators.required,Validators.pattern(" /^[-+]?[0-9]+$/"),,],),
      proteins: new FormControl(this.product.proteins, [Validators.required, Validators.pattern(" /^[-+]?[0-9]+$/"),],),
      carbohydrates: new FormControl(this.product.carbohydrates, [Validators.required, Validators.pattern(" /^[-+]?[0-9]+$/"),, Validators.min(1)],),
      fats: new FormControl(this.product.fats,  [Validators.required,Validators.pattern(" /^[-+]?[0-9]+$/"), Validators.min(1)],)
    },);
    this.productForm.valueChanges.subscribe(console.log);
  }

  newProduct(): void
  {
    this.submitted = false;
    this.product = new Product();
  }

  save(){
    this.productService.addProduct(this.product)
    this.product = new Product();
  }
  onSubmit()
  {
    this.submitted = true;
    this.save();
  }
  get name() {
    return this.productForm.get('name');
  }
  get calories() {
    return this.productForm.get('calories');
  }
  get category() {
    return this.productForm.get('category');
  }
  get fats() {
    return this.productForm.get('fats');
  }
  get proteins() {
    return this.productForm.get('proteins');
  }
  get carbohydrates()
  {
    return this.productForm.get('carbohydrates');
  }
}
