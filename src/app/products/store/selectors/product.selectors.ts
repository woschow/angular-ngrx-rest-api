import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppStateInterface} from '../../../shared/types/appState.interface';
import {ProductsStateInterface} from '../../types/state/productsState.interface';

export const productFeatureSelector = createFeatureSelector<AppStateInterface, ProductsStateInterface>('products')


/*export const productSelector = createSelector(
  productFeatureSelector,
  (productsState: ProductsStateInterface) => categoriesState.data
)

export const isLoadingSelector = createSelector(
  productFeatureSelector,
  (categoriesState: CategoriesStateInterface) => categoriesState.isLoading
)

export const errorSelector = createSelector(
  productFeatureSelector,
  (categoriesState: CategoriesStateInterface) => categoriesState.error
)*/
