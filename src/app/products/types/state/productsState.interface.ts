import {CategoryInterface} from '../../../shared/modules/categories/types/categorie.interface';
import {ProductInterface} from '../model/product.interface';

export  interface ProductsStateInterface{
  isLoading: boolean,
  isSubmitting: boolean,
  data: ProductInterface[] | null,
  error: string | null,
  selectedCategory: CategoryInterface | null;
}
