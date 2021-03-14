import {BackendErrorsInterface} from '../../../shared/types/backendErrors.interface';
import {CategoryInterface} from '../../../shared/modules/categories/types/categorie.interface';
import {ProductInterface} from '../model/product.interface';

export  interface ProductsStateInterface{
  isLoading: boolean,
  data: ProductInterface[] | null,
  error: string | null,
  selectedCategory: CategoryInterface | null;
}
