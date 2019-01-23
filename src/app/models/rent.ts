import { Product } from "./product";

export class Rent {

    public product: Product;
    public daysRented: number;
    public totalPrice: number;


    constructor(product: Product, daysRented: number, totalPrice: number )
    {
        this.product = product;
        this.daysRented = daysRented;
        this.totalPrice = totalPrice;
        
    }
}