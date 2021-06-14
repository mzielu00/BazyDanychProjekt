import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {CommonModule} from '@angular/common'
import{ FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './services/product.service';
import { AddProductComponent } from './components/add-product/add-product.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    LoginComponent
  ],

  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],

  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
