import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

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

  user_id: any;

  constructor(private productService: ProductService, private flashMessage: FlashMessagesService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.productService.getProductsFromCatalog()
      .subscribe(res => {
        this.catalogProducts = res;
      })
    this.authService.getProfile().subscribe(profile => {
      this.user_id = profile.user._id;
    })
  }

  onLoanSubmit() {
    const new_loan = {
      name: this.name,
      category: this.category,
      description: this.description,
      imageurl: this.imageurl,
      costPerDay: this.costPerDay,
      lend: false
    }

    this.productService.addProduct(new_loan).subscribe(product => {
      if (product) {
        const id = this.user_id
        this.productService.addLoanToUser(product, id).subscribe(user => {
          if (user) {
            this.flashMessage.show("Product added!", { cssClass: 'alert-success', timeout: 3000 });
            this.router.navigate(['/']);

          } else {
            this.flashMessage.show("Failed to add!", { cssClass: 'alert-danger', timeout: 3000 });
          }

        });

      }

    });
  }
}