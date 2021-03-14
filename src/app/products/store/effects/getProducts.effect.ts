import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import {Actions, createEffect, ofType} from '@ngrx/effects';

import {of} from 'rxjs';
import {catchError, map, switchMap, tap} from 'rxjs/operators';

import {ProductInterface} from '../../types/model/product.interface';
import {ProductsService} from '../../services/products.service';

import { getProductsAction,
        getProductsFailureAction,
        getProductsSuccessAction} from '../actions/products.actions';

@Injectable()

export class GetProductsEffect {
  register$ = createEffect(() => this.actions$.pipe(
    ofType(getProductsAction),
    switchMap(({request}) => {
        return this.productsService.getProducts(request).pipe(
            map((products: ProductInterface[]) => {
              return getProductsSuccessAction({products: products})
            }),
            catchError(() => {
              return of(getProductsFailureAction)
          })
        )

    })
  ))

 /*redirectAfterCategorySelected$ = createEffect(() => this.actions$.pipe(
    ofType(categorySelectedAction),
    tap(()=> this.router.navigateByUrl('/products/products'))
    ),
    {dispatch: false}
  )
*/
  constructor(private actions$: Actions,
              private productsService: ProductsService,
              private router: Router){}
}
