import { CreateProductEffect } from './store/effects/createProduct.effect';
import { ButtonModule } from 'primeng-lts/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from './components/product/product.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {reducer} from './store/reducers/products.reducer';
import {ProductsComponent} from './components/products/products.component';
import {EffectsModule} from '@ngrx/effects';
import {GetProductsEffect} from './store/effects/getProducts.effect';
import {ProductsService} from './services/products.service';
import {DropdownModule} from 'primeng-lts/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CategoriesModule} from '../shared/modules/categories/categories.module';
import {DataViewModule} from 'primeng/dataview';
import {LoadingModule} from '../shared/modules/loading/loading.module';
import { ProductImageComponent } from './components/productImage/productImage.component';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { FormlyModule } from '@ngx-formly/core';
import { CreateProductComponent } from './components/createProduct/createProduct.component';

const routes = [
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'products?category=:slug',
    component: ProductsComponent
  },
  {
    path: 'products/create',
    component: CreateProductComponent
  }
];

@NgModule({
  declarations: [ ProductComponent, ProductsComponent, ProductImageComponent, CreateProductComponent],
  imports: [CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormlyModule.forChild(),
    FormlyPrimeNGModule,
    StoreModule.forFeature('products', reducer),
    EffectsModule.forFeature([GetProductsEffect, CreateProductEffect]),
    DropdownModule,
    FormsModule,
    ButtonModule,
    BrowserAnimationsModule,
    CategoriesModule,
    DataViewModule,
    LoadingModule],

  providers: [ProductsService]
})

export class ProductsModule { }
