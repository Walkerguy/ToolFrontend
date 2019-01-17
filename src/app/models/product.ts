export class Product {

    public name: string;
    public category: string;
    public description: string;
    public imageurl: string;
    public costPerDay: string;
    public lend: boolean;

    constructor(name: string, category: string, description: string, imageurl: string, costPerDay: string, lend: boolean)
    {
        this.name = name;
        this.category = category;
        this.description = description;
        this.imageurl = imageurl;
        this.costPerDay = costPerDay;
        this.lend = lend;
    }
}