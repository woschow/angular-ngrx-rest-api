import {ProductsStateInterface} from '../../products/types/state/productsState.interface';
import {CategoriesStateInterface} from '../modules/categories/types/categoriesState.interface';

export interface AppStateInterface{
  products: ProductsStateInterface,
  categories: CategoriesStateInterface
}
