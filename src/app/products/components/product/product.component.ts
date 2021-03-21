import {Component, Input, OnInit} from '@angular/core'
import {ProductInterface} from '../../types/model/product.interface'
import {ProductViewTypes} from './productViewTypes'
import {ProductsStateInterface} from '../../types/state/productsState.interface'
import {select, Store} from '@ngrx/store'
import {productByProductUrlSelector} from '../../store/selectors/product.selectors'
import {take} from 'rxjs/operators'

@Component({
  selector: 'fs-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input('viewType') viewTypeProps: ProductViewTypes
  @Input('product') productProps: ProductInterface
  viewTypes = ProductViewTypes
  product: ProductInterface

  constructor(
    private store: Store<ProductsStateInterface>
  ) {}

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues() : void{

    const {product_url} = this.productProps
    this.store
      .pipe(
        select((state) => productByProductUrlSelector(product_url)(state)),
        take(1)
      )
      .subscribe((product) => (this.product = product))
  }

}
