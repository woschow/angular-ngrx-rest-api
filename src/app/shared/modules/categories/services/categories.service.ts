import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'

import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'

import {CategoryInterface} from '../types/categorie.interface'
import {environment} from '../../../../../environments/environment'
import {CategoriesResponseInterface} from '../types/categoriesResponse.interface'

@Injectable()
export class CategoriesService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<CategoryInterface[]> {
    const url = environment.apiUrl + '/shop/categories/'
    return this.http
      .get<CategoriesResponseInterface>(url)
      .pipe(
        map((response: CategoriesResponseInterface) =>
          response.categories.filter(
            (f) => f.name !== undefined && f.name !== 'undefined'
          )
        )
      )
  }
}
