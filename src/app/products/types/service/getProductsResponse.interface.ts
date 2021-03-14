import {ProductInterface} from '../model/product.interface';

export interface GetProductsResponseInterface {
  name: string,
  products: ProductInterface[];
}
