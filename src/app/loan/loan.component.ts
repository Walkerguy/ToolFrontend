import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  product: Product;
  catalogProducts: Product;
  name: string;
  category: string;
  description: string;
  imageurl: string;
  costPerDay: number;
  lend: false;

  constructor(private productService : ProductService, private flashMessage : FlashMessagesService, private router : Router) { }

  ngOnInit() {
    this.productService.getProductsFromCatalog()
    .subscribe(res =>{
      this.catalogProducts = res;
      console.log(this.catalogProducts);
    })
  }

  onLoanSubmit(){
    const new_loan = {
      name: this.name,
      category: this.category,
      description: this.description,
      imageurl: this.imageurl,
      costPerDay: this.costPerDay,
      lend: false
    }

    this.productService.addProduct(new_loan).subscribe(data => {
      if (data.success) {
        this.flashMessage.show("Product added!", {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/']);
        
} else {
        this.flashMessage.show("Failed to add!", {cssClass: 'alert-danger', timeout: 3000});
      }

    });

  }

}
