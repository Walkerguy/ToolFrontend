import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from '../services/product.service';
import { AuthService } from '../services/auth.service';
import { RentService } from '../services/rent.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { NgOnChangesFeature } from '@angular/core/src/render3';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {
  products: Product[];
  availableProducts: Product[] = [];
  new_Rent: any;
  public activeProduct: Product;
  public inputNum: number;
  public totalCost: number;
  public btnEnabled = true;

  user_id: any;

  c: number = 1;

  public searchTerm: string;

  constructor(private productService: ProductService, private authService: AuthService, private rentService: RentService, private flashMessage: FlashMessagesService, private router: Router) {
  }

  ngDoCheck() {
    if (this.inputNum > 0) {
      this.btnEnabled = false;
    }
    else {
      this.btnEnabled = true;
    }
  }


  ngOnInit() {
    this.productService.getProducts().subscribe(res => {
      this.products = res;
      for(let i = 0; i < this.products.length; i++){
        if(this.products[i].lend == false){
          this.availableProducts.push(this.products[i])
        }
      }
      // console.log(this.availableProducts);
    })

    this.authService.getProfile().subscribe(profile => {
      this.user_id = profile.user._id;
      // console.log(this.user_id);
      // console.log(profile.user);

    })

  }


  public calculateTotal() {
    this.totalCost = this.inputNum * this.activeProduct.costPerDay;
  }



  public openModal(product): void {
    // Copying object reference so we dont modify the original
    this.activeProduct = Object.assign({}, product)
    let totalCost = 0;
    this.inputNum = 0;
    // console.log(this.activeProduct)
  }

  onRentSubmit() {
    this.calculateTotal()
    const new_rent = {
      products: this.activeProduct._id,
      daysRented: this.inputNum,
      totalPrice: this.totalCost

    }
    
    this.rentService.addRent(new_rent).subscribe(rent => {
      if (rent) {
        console.log(rent);
        const id = this.user_id
        this.rentService.addRentToUser(rent, id).subscribe(user => {
          console.log('rent check '+this.activeProduct._id)
          if (user) {
            for(let i = 0; i < this.availableProducts.length; i++){
              if(this.availableProducts[i]._id == this.activeProduct._id){
                this.availableProducts.splice(i, 1)
              }
            }
            this.flashMessage.show("Rent added!", { cssClass: 'alert-success', timeout: 3000 });
            this.router.navigate(['/']);
          

            

          } else {
            this.flashMessage.show("Failed to add!", { cssClass: 'alert-danger', timeout: 3000 });
          }

        });

      }

    }

    );
  }
}
