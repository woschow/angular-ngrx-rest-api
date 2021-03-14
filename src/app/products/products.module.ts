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
import {BackendErrorMessagesModule} from '../shared/modules/backendErrorMessages/backendErrorMessages.module';
import {DropdownModule} from 'primeng-lts/dropdown';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {CategoriesModule} from '../shared/modules/categories/categories.module';
import {DataViewModule} from 'primeng/dataview';
import {LoadingModule} from '../shared/modules/loading/loading.module';

const routes = [
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'products?category=:slug',
    component: ProductsComponent
  }
];

@NgModule({
  declarations: [ ProductComponent, ProductsComponent],
  imports: [CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('products', reducer),
    EffectsModule.forFeature([GetProductsEffect]),
    BackendErrorMessagesModule, DropdownModule, FormsModule, BrowserAnimationsModule, CategoriesModule, DataViewModule, LoadingModule],

  providers: [ProductsService]
})

export class ProductsModule { }
