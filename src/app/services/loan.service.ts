import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Product } from '../models/product';
import {Loan} from '../models/loan'

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  loan: Loan;
  product: Product;
  localUrl: string = 'http://localhost:3000/api/loans';
  deployUrl: string = '';

  constructor(private _http : Http) { }

  getLoans() {
    return this._http.get(this.localUrl)
    .map(res=>res.json());
  }
  
  getLoanById(_id:string) {
   return this._http.get(this.localUrl + '/' + _id)
   .map(res=>res.json());
  }
  
  addLoan(loan){
   let headers = new Headers();
   headers.append('Content-Type','application/json');
   return this._http.post(this.localUrl, loan, {headers: headers})
   .map(res => res.json());
  }

  addProductById(_id:string, product){

    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this._http.post(this.localUrl + '/' + _id, product, {headers: headers})
    .map(res => res.json());
  }
  
  
  deleteLoan(_id:string){
  
     let headers = new Headers();
     headers.append('Content-Type','application/json');
     return this._http.delete(this.localUrl + '/' + _id, {headers: headers})
   }
}
