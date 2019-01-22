import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Product } from '../models/product';
import {Rent} from '../models/rent'

@Injectable({
  providedIn: 'root'
})
export class RentService {
  rent: Rent;
  product: Product;
  localUrl: string = 'http://localhost:3000/api/rents';
  localUsersUrl : string = 'http://localhost:3000/api/users/rent';
  
  deployUrl: string = 'https://spaverhuurbackend.herokuapp.com/api/rents';
  deployUsersUrl: string = 'https://spaverhuurbackend.herokuapp.com/api/users/rent';

  constructor(private _http : Http) { }

  getRents() {
    return this._http.get(this.localUrl)
    .map(res=>res.json());
  }
  
  getRentById(_id:string) {
   return this._http.get(this.localUrl + '/' + _id)
   .map(res=>res.json());
  }
  
  addRent(new_rent){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this._http.post(this.localUrl, new_rent, {headers: headers})
    .map(res => res.json());
   }

  addRentToUser(rent, id:string){
   let headers = new Headers();
   headers.append('Content-Type','application/json');
   return this._http.put(this.localUsersUrl + '/' + id, rent, {headers: headers})
   .map(res => res.json());
  }

  addProductById(_id:string, product){

    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this._http.post(this.localUrl + '/' + _id, product, {headers: headers})
    .map(res => res.json());
  }
  
  
  deleteRent(_id:string){
  
     let headers = new Headers();
     headers.append('Content-Type','application/json');
     return this._http.delete(this.localUrl + '/' + _id, {headers: headers})
   }
}
