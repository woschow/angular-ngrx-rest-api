import {Component, Input, OnInit} from '@angular/core';

import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';

import {CategoriesViewTypes} from './categoriesViewTypes';
import {CategoryInterface} from '../types/categorie.interface';

import {categorySelectedAction} from '../store/actions/categories.actions';
import {categoriesSelector, errorSelector, isLoadingSelector} from '../store/selectors';
import {getCategoriesAction} from '../store/actions/categories.actions';

@Component({
  selector: 'fs-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  @Input('viewType') viewTypeProps: CategoriesViewTypes;
  categories$: Observable<CategoryInterface[] | null>;
  selectedCategory: CategoryInterface;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  viewTypes = CategoriesViewTypes;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  initializeValues(): void{
    this.categories$ = this.store.pipe(select(categoriesSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
  }

  fetchData(): void{
    this.store.dispatch(getCategoriesAction());
  }

  onChange(category: CategoryInterface): void {
    this.store.dispatch(categorySelectedAction({ category: category}));
  }

  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }

}
