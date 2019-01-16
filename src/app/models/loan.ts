import { Product } from "./product";

export class Loan {

    public product: Product;
    public startLoanDate: Date;
    public endLoanDate: Date;


    constructor(product: Product, startLoanDate: Date, endLoanDate: Date )
    {
        this.product = product;
        this.startLoanDate = startLoanDate;
        this.endLoanDate = endLoanDate;
        
    }
}