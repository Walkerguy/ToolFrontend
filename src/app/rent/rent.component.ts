import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {
  products: Product[];
  public activeProduct: Product;
  public inputNum: number;
  public totalCost: number = 0;
  public btnEnabled = true;
  public searchTerm: string;


  constructor(private productService:ProductService){
  }
  
  ngDoCheck(){
   if (this.inputNum > 0){
     this.btnEnabled = false;
   }
   else{
     this.btnEnabled = true;
   }
  }
 ngOnInit() {
   this.productService.getProducts().subscribe(res =>{
    this.products = res;
    console.log(this.products); 
   })
 } 

  
 public calculateTotal(): number {
   return this.totalCost  = this.activeProduct.inputNum * this.activeProduct.costPerDay;
 }
  
 public openModal(product): void{ 
   // Copying object reference so we dont modify the original
   this.activeProduct = Object.assign({}, product)
   this.totalCost = 0;
   this.inputNum = 0;
   console.log(this.activeProduct) 
} } 