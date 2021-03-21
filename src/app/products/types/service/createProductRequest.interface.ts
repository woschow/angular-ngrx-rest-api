import { ProductInterface } from './../model/product.interface';

export interface CreateProductRequestInterface{
    name: string,
    price: number,
    category_url: string,
    vendor_url: string
}