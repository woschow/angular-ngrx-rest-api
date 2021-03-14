import {Action, createReducer, on} from '@ngrx/store';

import {CategoriesStateInterface} from '../types/categoriesState.interface';
import {getCategoriesAction,
        getCategoriesFailureAction,
        getCategoriesSuccessAction,
        categorySelectedAction } from './actions/categories.actions';

const initialState: CategoriesStateInterface = {
  isLoading: false,
  data: null,
  error: null,
  selectedCategory: null
};

const categoriesReducer = createReducer(
  initialState,
  on(
    getCategoriesAction,
    (state): CategoriesStateInterface => ({
      ...state,
      isLoading: true,
      selectedCategory: null,
      data: null
    })
  ),
  on(
    getCategoriesSuccessAction,
    (state, action): CategoriesStateInterface => ({
      ...state,
      isLoading: false,
      data: action.categories
    })
  ),
  on(
    getCategoriesFailureAction,
    (state): CategoriesStateInterface => ({
      ...state,
      isLoading: false,
      data: null
    })
  ),
  on(categorySelectedAction, (state, action): CategoriesStateInterface => ({
    ...state,
    selectedCategory: action.category
  }))
);

export function reducer(state: CategoriesStateInterface, action: Action): CategoriesStateInterface {
  return categoriesReducer(state, action);
}
