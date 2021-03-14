import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {DropdownModule} from 'primeng/dropdown';

import {reducer} from './store/reducers';
import {GetCategoriesEffect} from './store/effects/getCategories.effect';

import { CategoriesComponent } from './components/categories.component';

import {LoadingModule} from '../loading/loading.module';
import {ErrorMessageModule} from '../errorMessage/errorMessage.module';
import {CategoriesService} from './services/categories.service';

@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('categories', reducer),
    EffectsModule.forFeature([GetCategoriesEffect]),
    LoadingModule,
    DropdownModule,
    FormsModule,
    RouterModule,
    ErrorMessageModule
  ],
  exports: [CategoriesComponent],
  providers: [CategoriesService]
})
export class CategoriesModule { }
