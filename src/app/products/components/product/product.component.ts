import {Component, Input, OnInit} from '@angular/core';
import {ProductInterface} from '../../types/model/product.interface';
import {ProductViewTypes} from './productViewTypes';
import {ProductsService} from '../../services/products.service';
import {GetProductRequestInterface} from '../../types/service/getProductRequest.interface';
import { DomSanitizer } from '@angular/platform-browser';
import {GetProductPhotoRequestInterface} from '../../types/service/getProductPhotoRequest.interface';

@Component({
  selector: 'fs-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input("viewType") viewTypeProps: ProductViewTypes
  @Input("product") productProps: ProductInterface;
  viewTypes = ProductViewTypes;
  product: ProductInterface;
  thumbnail: any | null;

  constructor(private productsService: ProductsService,
              private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void{
    const requestProduct : GetProductRequestInterface = {
      product_url: this.productProps.product_url
    }
    this.productsService.getProduct(requestProduct).subscribe(
      (data: ProductInterface) => {
        this.product = data
      });

    const requestProductPhoto : GetProductPhotoRequestInterface = {
      product_url: this.productProps.product_url
    }

    /*this.productsService.getProductPhoto(requestProductPhoto).subscribe(
      (baseImage: any) => {


        console.log('getProductPhoto');

        //let objectURL = 'data:image/jpeg;base64,' + baseImage.image;

        let objectURL = URL.createObjectURL(baseImage);

        this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      });*/
  }

}
