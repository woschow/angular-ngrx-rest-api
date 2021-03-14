import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {getProductAction, getProductFailureAction, getProductSuccessAction} from '../actions/product.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {ProductInterface} from '../../types/model/product.interface';
import {ProductsService} from '../../services/products.service';
import {of} from 'rxjs';

@Injectable()

export class GetProductEffect {
  getProductEffect$ = createEffect(() => this.actions$.pipe(
    ofType(getProductAction),
    switchMap(({request}) => {

        return this.productsService.getProduct(request).pipe(
            map((product: ProductInterface) => {
              return getProductSuccessAction({product: product})
            }),
            catchError(() => {
              return of(getProductFailureAction)
          })
        )

    })
  ))

  constructor(private actions$: Actions, private productsService: ProductsService){}
}
