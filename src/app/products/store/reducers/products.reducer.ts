import {ProductsStateInterface} from '../../types/state/productsState.interface';
import {Action, createReducer, on} from '@ngrx/store';
import {createProductFailureAction, createProductSuccessAction, getProductsAction,
        getProductsFailureAction,
        getProductsSuccessAction } from '../actions/products.actions';

const initialState: ProductsStateInterface = {
  isLoading: false,
  isSubmitting: false,
  selectedCategory: null,
  data: null,
  error: null
};

const productsReducer = createReducer(
  initialState,
  on(
    getProductsAction,
    (state): ProductsStateInterface => ({
      ...state,
      isLoading: true,
      isSubmitting: false,
      selectedCategory: null,
      data: null
    })),
  on(
    getProductsSuccessAction,
    (state, action): ProductsStateInterface => ({
      ...state,
      isLoading: false,
      isSubmitting: false,
      data: action.products
    })
  ),
  on(
    getProductsFailureAction,
    (state): ProductsStateInterface => ({
      ...state,
      isLoading: false,
      isSubmitting: false,
      data: null
    })
  ),
  on(
    createProductSuccessAction,
    (state): ProductsStateInterface => ({
      ...state,
      isSubmitting: false
    })
  ),

  on(
    createProductFailureAction,
    (state, action): ProductsStateInterface => ({
      ...state,
      isSubmitting: false
    })
  )
);

export function reducer(state: ProductsStateInterface, action: Action): ProductsStateInterface {
  return productsReducer(state, action);
}
