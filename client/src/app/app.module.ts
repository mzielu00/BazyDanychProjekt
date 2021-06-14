import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{ FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './services/product.service';
import { AddProductComponent } from './components/add-product/add-product.component';
import { LoginComponent } from './components/login/login.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NameFilterPipe } from './components/product-list/filters/name-filter.pipe';
import { CategoryFilterPipe } from './components/product-list/filters/category-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    LoginComponent,
    ProductDetailsComponent,
    ProductListComponent,
    NameFilterPipe,
    CategoryFilterPipe
  ],

  imports: [
    BrowserModule,

    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule
  ],

  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
