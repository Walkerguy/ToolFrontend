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
  product: any;
  localUrl: string = 'http://localhost:3000/api/products';
  localUsersUrl : string = 'http://localhost:3000/api/users/product';

  catalogUrl: string = 'https://spatoolbackend.herokuapp.com/api/products';
  deployUrl: string = 'https://spaverhuurbackend.herokuapp.com/api/products';
  deployUsersUrl: string = 'https://spaverhuurbackend.herokuapp.com/api/users/product';
 

  constructor(private _http : Http) { }


getProducts() {
  return this._http.get(this.localUrl) 
  .map(res=>res.json());
}

getProductsFromCatalog() {
  return this._http.get(this.catalogUrl)
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

addLoanToUser(loan, id:string){
  let headers = new Headers();
  headers.append('Content-Type','application/json');
  return this._http.put(this.localUsersUrl + '/' + id, loan, {headers: headers})
  .map(res => res.json());
 }


deleteProduct(_id:string){

   let headers = new Headers();
   headers.append('Content-Type','application/json');
   return this._http.delete(this.localUrl + '/' + _id, {headers: headers})
 }
}