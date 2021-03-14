import {CategoryInterface} from './categorie.interface';

export interface CategoriesStateInterface{
  isLoading: boolean,
  data: CategoryInterface[] | null,
  selectedCategory: CategoryInterface,
  error: string | null
}
