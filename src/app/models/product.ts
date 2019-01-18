export class Product {

    public name: string;
    public category: string;
    public description: string;
    public imageurl: string;
    public costPerDay: number;
    public lend: boolean;
    public inputNum: number; 

    constructor(name: string, category: string, description: string, imageurl: string, costPerDay: number, lend: boolean, inputNum: number)
    {
        this.name = name;
        this.category = category;
        this.description = description;
        this.imageurl = imageurl;
        this.costPerDay = costPerDay;
        this.lend = lend;
        this.inputNum = inputNum;
    }
}