import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ProductsStateInterface} from '../../types/state/productsState.interface';

export const productFeatureSelector = createFeatureSelector<ProductsStateInterface>('products')

export const productStateSelector = createSelector(
  productFeatureSelector,
  (productsState: ProductsStateInterface) => productsState
)

export const productsSelector = createSelector(
  productStateSelector,
  (state:ProductsStateInterface)=> state.data
)
export const productByProductUrlSelector = (product_url:string) => createSelector(
  productStateSelector,
  (state:ProductsStateInterface)=> state.data.find(p=>p.product_url===product_url)
)

export const isSubmittingSelector = createSelector(
  productFeatureSelector,
  (state:ProductsStateInterface) => state.isSubmitting
)

