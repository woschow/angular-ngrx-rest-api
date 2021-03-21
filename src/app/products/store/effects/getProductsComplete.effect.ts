import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import {Actions, createEffect, ofType} from '@ngrx/effects';

import {async, of} from 'rxjs';
import {catchError, map, switchMap, tap} from 'rxjs/operators';

import {ProductInterface} from '../../types/model/product.interface';
import {ProductsService} from '../../services/products.service';

import { getProductsAction,
        getProductsFailureAction,
        getProductsSuccessAction} from '../actions/products.actions';
import {GetProductRequestInterface} from '../../types/service/getProductRequest.interface';

@Injectable()

export class GetProductsEffect {
  register$ = createEffect(() => this.actions$.pipe(
    ofType(getProductsAction),
    switchMap(({request}) => {
        return this.productsService.getProducts(request).pipe(
            map((products: ProductInterface[]) => {

              console.log('products', products);

              products.forEach(function(product){

                console.log('product', product);

                /*const requestProduct : GetProductRequestInterface = {
                  product_url: product.product_url
                }

                const responseProduct = this.productsService.getProduct(requestProduct);

                responseProduct.subscribe(
                  (data: ProductInterface) => {

                    console.log('data', data);

                    product = {
                      ...product,
                      price: data.price,
                      vendor_url: data.vendor_url,
                      category_url: data.category_url
                    }
                  });*/
              })

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
