import { Product } from "./product";

export class Rent {

    public product: Product;
    public startRentDate: Date;
    public endRentDate: Date;


    constructor(product: Product, startRentDate: Date, endRentDate: Date )
    {
        this.product = product;
        this.startRentDate = startRentDate;
        this.endRentDate = endRentDate;
        
    }
}