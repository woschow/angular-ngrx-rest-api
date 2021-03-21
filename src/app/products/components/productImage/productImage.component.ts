import { ProductsService } from './../../services/products.service';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {GetProductPhotoRequestInterface} from '../../types/service/getProductPhotoRequest.interface';
import {ProductInterface} from '../../types/model/product.interface';
import {ProductViewTypes} from '../product/productViewTypes';

@Component({
  selector: 'fs-product-image',
  templateUrl: './productImage.component.html',
  styleUrls: ['./productImage.component.scss']
})
export class ProductImageComponent implements OnInit {
  @Input('viewType') viewTypeProps: ProductViewTypes
  @Input('product') productProps: ProductInterface
  thumbnail: any | undefined
  viewTypes = ProductViewTypes

  constructor(   private sanitizer: DomSanitizer,
                private productsService: ProductsService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {

    if(!this.productProps.photo_url) return;

    const requestProductPhoto : GetProductPhotoRequestInterface = {
      product_url: this.productProps.photo_url
    }

    this.productsService.getProductPhotoBlob(requestProductPhoto).subscribe(
      (baseImage: any) => {
        let objectURL = URL.createObjectURL(baseImage);

        this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      });

  }

}
