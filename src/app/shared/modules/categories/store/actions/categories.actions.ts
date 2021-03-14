import {createAction, props} from '@ngrx/store';

import {CategoryInterface} from '../../types/categorie.interface';
import {ActionTypes} from '../actionTypes';

export const categorySelectedAction = createAction(ActionTypes.CATEGORY_SELECTED, props<{category: CategoryInterface}>());

export const getCategoriesAction = createAction(ActionTypes.GET_CATEGORIES);
export const getCategoriesSuccessAction = createAction(ActionTypes.GET_CATEGORIES_SUCCESS, props<{categories: CategoryInterface[]}>());
export const getCategoriesFailureAction = createAction(ActionTypes.GET_CATEGORIES_FAILURE);
