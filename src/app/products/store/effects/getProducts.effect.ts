import {Injectable} from '@angular/core';

import {Actions, createEffect, ofType} from '@ngrx/effects';

import {async, forkJoin, Observable, of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';

import {ProductInterface} from '../../types/model/product.interface';
import {ProductsService} from '../../services/products.service';

import { getProductsAction,
        getProductsFailureAction,
        getProductsSuccessAction} from '../actions/products.actions';

@Injectable()

export class GetProductsEffect {
  getProducts$ = createEffect(() => this.actions$.pipe(
    ofType(getProductsAction),
    switchMap(({request}) => {
        return this.productsService.getProducts(request).pipe(
            switchMap((products: ProductInterface[]) => {
            const allProducts = products.filter(p=>p.product_url != undefined && p.product_url !== 'undefined').map((product)=>{
                const  {product_url}=product;
                return this.productsService.getProduct({product_url})
              })
              const allResolvedProducts = forkJoin(allProducts)
              return allResolvedProducts.pipe(map(products=> getProductsSuccessAction({ products})))
            }),
            catchError(() => {
              return of(getProductsFailureAction)
          })
        )

    })
  ))

  constructor(private actions$: Actions,
              private productsService: ProductsService){}
}
