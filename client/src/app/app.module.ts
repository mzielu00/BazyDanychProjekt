import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{ FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './services/product.service';
import { AddProductComponent } from './components/add-product/add-product.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    LoginComponentComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],

  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
