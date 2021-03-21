import { CreateProductRequestInterface } from './../../types/service/createProductRequest.interface';
import { createProductAction } from './../../store/actions/products.actions';
import { CategoryInterface } from './../../../shared/modules/categories/types/categorie.interface';
import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { select, Store } from '@ngrx/store';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {InputNumberModule} from 'primeng-lts/inputnumber';
import { Observable, async } from 'rxjs';
import { CategoriesStateInterface } from 'src/app/shared/modules/categories/types/categoriesState.interface';
import { ProductInterface } from '../../types/model/product.interface';
import { ProductsStateInterface } from '../../types/state/productsState.interface';
import { selectedCategorySelector } from 'src/app/shared/modules/categories/store/selectors';

@Component({
  selector: 'fs-createProduct',
  templateUrl: './createProduct.component.html',
  styleUrls: ['./createProduct.component.scss']
})
export class CreateProductComponent implements OnInit {
  form: FormGroup;
  model: ProductInterface;
  fields: FormlyFieldConfig[];
  isSubmitting$: Observable<boolean>
  selectedCategory$: Observable<CategoryInterface>

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void{
    this.selectedCategory$ = this.store.pipe(select(selectedCategorySelector));

    this.form = new FormGroup({});
    this.model = {   name: '',
                    price: 0,
                    category_url: '',
                    vendor_url: '',
                    product_url: '',
                    photo_url: ''
                 };
    this.fields = [
      {
        key: 'name',
        type: 'input',
        templateOptions: {
          label: 'Name',
          placeholder: 'Enter name',
          required: true,
        }
      },
      {
        key: 'price',
        type: 'input',
        templateOptions: {
          label: 'Price',
          placeholder: 'Enter price',
          type: 'number',
          mode: 'currency',
          currency: 'EUR',
          locale: 'de-DE',
          required: true,
        }
      } 
    ];
  }

  onSubmit() {
    let category_url: string;

    this.selectedCategory$.subscribe(
      (category: CategoryInterface) => {
        category_url = '/shop/categories/' + category.name;
      });

    const requestCreateProduct : CreateProductRequestInterface = {
      name: this.model.name,
      price: this.model.price,
      vendor_url: '/shop/vendors/672',
      category_url: category_url,
    }

    this.store.dispatch(createProductAction({request: requestCreateProduct}));
  }

}
