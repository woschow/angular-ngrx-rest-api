import {createAction, props} from '@ngrx/store';

import {ActionTypes} from './actionTypes';
import {GetProductsRequestInterface} from '../../types/service/getProductsRequest.interface';
import {ProductInterface} from '../../types/model/product.interface';
import { CreateProductRequestInterface } from '../../types/service/createProductRequest.interface';

export const getProductsAction = createAction(ActionTypes.GET_PRODUCTS, props<{request: GetProductsRequestInterface}>());
export const getProductsSuccessAction = createAction(ActionTypes.GET_PRODUCTS_SUCCESS, props<{products: ProductInterface[]}>());
export const getProductsFailureAction = createAction(ActionTypes.GET_PRODUCTS_FAILURE);


export const createProductAction = createAction(ActionTypes.CREATE_PRODUCT, props<{request: CreateProductRequestInterface}>());
export const createProductSuccessAction = createAction(ActionTypes.CREATE_PRODUCT_SUCCESS, props<{product: ProductInterface}>());
export const createProductFailureAction = createAction(ActionTypes.CREATE_PRODUCT_FAILURE);




