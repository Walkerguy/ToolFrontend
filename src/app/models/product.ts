export class Product {
    public _id: string;
    public name: string;
    public category: string;
    public description: string;
    public imageurl: string;
    public costPerDay: number;
    public lend: boolean;
    public inputNum: number; 

    constructor(_id: string, name: string, category: string, description: string, imageurl: string, costPerDay: number, lend: boolean, inputNum: number)
    {
        this._id = _id;
        this.name = name;
        this.category = category;
        this.description = description;
        this.imageurl = imageurl;
        this.costPerDay = costPerDay;
        this.lend = lend;
        this.inputNum = inputNum;
    }
}