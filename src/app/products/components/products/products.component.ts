import {Component, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';

import {select, Store} from '@ngrx/store';

import {SelectItem} from 'primeng/api';

import {CategoriesViewTypes as CategoriesViewTypes} from '../../../shared/modules/categories/components/categoriesViewTypes';
import {ProductViewTypes as ProductsViewTypes} from '../product/productViewTypes';

import {ProductInterface} from '../../types/model/product.interface';
import {getProductsAction} from '../../store/actions/products.actions';
import {GetProductsRequestInterface} from '../../types/service/getProductsRequest.interface';
import {productsSelector, errorSelector, isLoadingSelector} from '../../store/selectors/products.selectors';

import {stringify, parseUrl} from 'query-string'
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'fs-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productsViewTypes = ProductsViewTypes;
  categoriesViewTypes = CategoriesViewTypes;

  products$: Observable<ProductInterface[]>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;

  sortOptions: SelectItem[];
  sortOrder: number;
  sortField: string;

  queryParamsSubscription: Subscription

  category: string;

  // category$ : Observable<CategoryInterface>;
  // category: CategoryInterface;

  constructor(private store: Store,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initializeValues();
    this.fetchProducts();
    this.initializeListeners();
  }

  initializeValues(): void {
    this.sortOptions = [
      {label: 'Price High to Low', value: '!price'},
      {label: 'Price Low to High', value: 'price'}
    ];

    this.products$ = this.store.pipe(select(productsSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))

    /*this.category$ = this.store.pipe(select(selectedCategorySelector))

    this.category$.subscribe(
      o => this.category = o,
      err => console.log('Err', err),
      () => console.log('Complete'));

    //this.category$.pipe(tap((val) => this.category = val));
    console.log('Category', this.category)

    console.log('Category$', this.category$)*/
  }

  fetchProducts(): void{

    if(this.category === '') return;

    const request: GetProductsRequestInterface = {
      category_url: '/shop/categories/' + this.category
    }
    this.store.dispatch(getProductsAction({request}));
  }

  initializeListeners(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        this.category = params.category || ''
        this.fetchProducts()
      }
    )
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe()
  }

}
