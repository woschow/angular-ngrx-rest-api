import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';

import {
  getCategoriesAction,
  getCategoriesFailureAction,
  getCategoriesSuccessAction
} from '../actions/categories.actions';

import {CategoriesService} from '../../services/categories.service';
import {CategoryInterface} from '../../types/categorie.interface';

@Injectable()
export class GetCategoriesEffect{
  getCategoriesEffect$ = createEffect(() =>
      this.actions$.pipe(
        ofType(getCategoriesAction),
        switchMap(() => {
          return this.categoriesService.getCategories().pipe(
            map((categories: CategoryInterface[]) => {
              return getCategoriesSuccessAction({categories})
            }),
            catchError(() => {
              return of(getCategoriesFailureAction())
            })
          )
        })
    )
  )

  constructor(private actions$: Actions,
              private categoriesService: CategoriesService){}
}
