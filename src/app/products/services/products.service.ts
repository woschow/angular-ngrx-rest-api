
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

import {environment} from '../../../environments/environment';

import {GetProductsRequestInterface} from '../types/service/getProductsRequest.interface';
import {ProductInterface} from '../types/model/product.interface';
import {GetProductsResponseInterface} from '../types/service/getProductsResponse.interface';
import {GetProductPhotoRequestInterface} from '../types/service/getProductPhotoRequest.interface';
import {GetProductRequestInterface} from '../types/service/getProductRequest.interface';
import {GetProductResponseInterface} from '../types/service/getProductResponse.interface';
import { CreateProductRequestInterface } from '../types/service/createProductRequest.interface';

@Injectable()
export class ProductsService{

  constructor(private http: HttpClient ) {}

  createProduct(productInput: CreateProductRequestInterface): Observable<ProductInterface> {

    console.log('productInput', productInput);

    const fullUrl = environment.apiUrl + '/shop/products'
    return this.http
      .post<ProductInterface>(fullUrl, productInput)
      .pipe(
        map((response: ProductInterface) => {

          console.log('response', response);
          
          return response
        })
      )
  }

  getProducts(request: GetProductsRequestInterface): Observable<ProductInterface[]>{

    const url = environment.apiUrl + request.category_url;

    return this.http.get<GetProductsResponseInterface>(url).pipe(map((response: GetProductsResponseInterface) => response.products));
  }

  getProduct(request: GetProductRequestInterface): Observable<ProductInterface>{

    const product_url = environment.apiUrl + request.product_url;

    return this.http.get<GetProductResponseInterface>(product_url).pipe(map((response: GetProductResponseInterface) => ({...response, product_url: product_url})  ));
  }

  getProductPhoto(request: GetProductPhotoRequestInterface): Observable<Blob>{

    const url = environment.apiUrl + request.product_url; //+ "/photo";

    return this.http.get<Blob>(url).pipe(map((response: Blob) => response), catchError(this.handleError));
  }

  getProductPhotoBlob(request: GetProductPhotoRequestInterface): Observable<Blob>{

    const url = environment.apiUrl + request.product_url; //+ "/photo";

    return this.http.get(url,  {responseType: 'blob'}).pipe(map(blob => blob), catchError(this.handleError));
  }

  

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }



}
