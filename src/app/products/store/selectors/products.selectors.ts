import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppStateInterface} from '../../../shared/types/appState.interface';
import {ProductsStateInterface} from '../../types/state/productsState.interface';

export const productsFeatureSelector = createFeatureSelector<AppStateInterface, ProductsStateInterface>('products')

export const productsSelector = createSelector(
  productsFeatureSelector,
  (productsState: ProductsStateInterface) => productsState.data
)

export const isLoadingSelector = createSelector(
  productsFeatureSelector,
  (productsState: ProductsStateInterface) => productsState.isLoading
)

export const errorSelector = createSelector(
  productsFeatureSelector,
  (productsState: ProductsStateInterface) => productsState.error
)
