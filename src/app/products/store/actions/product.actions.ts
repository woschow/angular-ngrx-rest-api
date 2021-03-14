import {createAction, props} from '@ngrx/store';
import {ActionTypes} from './actionTypes';
import {GetProductRequestInterface} from '../../types/service/getProductRequest.interface';
import {ProductInterface} from '../../types/model/product.interface';

export const getProductAction = createAction(ActionTypes.GET_PRODUCT, props<{request: GetProductRequestInterface}>());
export const getProductSuccessAction = createAction(ActionTypes.GET_PRODUCT_SUCCESS, props<{product: ProductInterface}>());
export const getProductFailureAction = createAction(ActionTypes.GET_PRODUCT_FAILURE);
