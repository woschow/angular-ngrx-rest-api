import {ProductsStateInterface} from '../../types/state/productsState.interface';
import {Action, createReducer, on} from '@ngrx/store';
import {getProductsAction,
        getProductsFailureAction,
        getProductsSuccessAction } from '../actions/products.actions';

const initialState: ProductsStateInterface = {
  isLoading: false,
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
      selectedCategory: null,
      data: null
    })),
  on(
    getProductsSuccessAction,
    (state, action): ProductsStateInterface => ({
      ...state,
      isLoading: false,
      data: action.products
    })
  ),
  on(
    getProductsFailureAction,
    (state): ProductsStateInterface => ({
      ...state,
      isLoading: false,
      data: null
    })
  )
/*  ),
  on(getProductAction, (state): ProductsStateInterface => ({
    ...state,
    isLoading: true
  }))*/
);

export function reducer(state: ProductsStateInterface, action: Action): ProductsStateInterface {
  return productsReducer(state, action);
}
