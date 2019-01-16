import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product: Product;
  localUrl: string = 'http://localhost:3000/api/products';
  deployUrl: string = '';

  constructor(private _http : Http) { }


getProducts() {
  return this._http.get(this.localUrl)
  .map(res=>res.json());
}

getProductById(_id:string) {
 return this._http.get(this.localUrl + '/' + _id)
 .map(res=>res.json());
}

addProduct(product){
 let headers = new Headers();
 headers.append('Content-Type','application/json');
 return this._http.post(this.localUrl, product, {headers: headers})
 .map(res => res.json());
}


deleteProduct(_id:string){

   let headers = new Headers();
   headers.append('Content-Type','application/json');
   return this._http.delete(this.localUrl + '/' + _id, {headers: headers})
 }
}