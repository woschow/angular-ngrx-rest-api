import {createAction, props} from '@ngrx/store';

import {ActionTypes} from './actionTypes';
import {GetProductsRequestInterface} from '../../types/service/getProductsRequest.interface';
import {ProductInterface} from '../../types/model/product.interface';

export const getProductsAction = createAction(ActionTypes.GET_PRODUCTS, props<{request: GetProductsRequestInterface}>());
export const getProductsSuccessAction = createAction(ActionTypes.GET_PRODUCTS_SUCCESS, props<{products: ProductInterface[]}>());
export const getProductsFailureAction = createAction(ActionTypes.GET_PRODUCTS_FAILURE);




