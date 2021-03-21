import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppStateInterface} from '../../../types/appState.interface';
import {CategoriesStateInterface} from '../types/categoriesState.interface';

export const categoriesFeatureSelector = createFeatureSelector<
  AppStateInterface,
  CategoriesStateInterface
  >('categories')

export const categoriesSelector = createSelector(
  categoriesFeatureSelector,
  (categoriesState: CategoriesStateInterface) => categoriesState.data
)

export const isLoadingSelector = createSelector(
  categoriesFeatureSelector,
  (categoriesState: CategoriesStateInterface) => categoriesState.isLoading
)

export const errorSelector = createSelector(
  categoriesFeatureSelector,
  (categoriesState: CategoriesStateInterface) => categoriesState.error
)

export const selectedCategorySelector = createSelector(
  categoriesFeatureSelector,
  (categoriesState: CategoriesStateInterface) => categoriesState.selectedCategory
)
