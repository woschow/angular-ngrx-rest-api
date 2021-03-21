import { CreateProductRequestInterface } from './../../types/service/createProductRequest.interface';
import { ProductInterface } from './../../types/model/product.interface';
import { createProductAction, 
        createProductSuccessAction, 
        createProductFailureAction } from './../actions/products.actions';
import { ProductsService } from './../../services/products.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Router } from '@angular/router';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import {of} from 'rxjs'


@Injectable()
export class CreateProductEffect{

    createProduct$ = createEffect(() => 
        this.actions$.pipe(
        ofType(createProductAction),
        switchMap(({request}) => {
            return this.productsService.createProduct(request).pipe(
            map((product: ProductInterface) => {
                return createProductSuccessAction({product})
            }),
            catchError(() => {
                return of(createProductFailureAction)
            })
            )
        })
        )
    )

    redirectAfterProductCreate$ = createEffect(
        () =>
          this.actions$.pipe(
            ofType(createProductSuccessAction),
            tap(({product}) => {
              this.router.navigate(['/products', {queryParams: {category: product.category_url.split('/')[2]}}])
            })
          ),
        {dispatch: false}
    )


    constructor(
        private actions$: Actions,
        private productsService: ProductsService,
        private router: Router
      ) {}
}