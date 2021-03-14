import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
   categorySelectedAction,
} from '../actions/categories.actions';
import { tap} from 'rxjs/operators';

import {Router} from '@angular/router';
import {CategoriesService} from '../../services/categories.service';

@Injectable()

export class SelectCategoryEffect {
  redirectAfterCategorySelected$ = createEffect(() => this.actions$.pipe(
      ofType(categorySelectedAction),
      tap(()=> this.router.navigateByUrl('/products/products'))
    ),
    {dispatch: false}
    )

  constructor(private actions$: Actions, private categoriesService: CategoriesService, private router: Router){}
}
