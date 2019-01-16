export class Product {

    public name: string;
    public category: string;
    public description: string;
    public imageUrl: string;
    public price: number;

    constructor(name: string, category: string, description: string, imageUrl: string, price: number)
    {
        this.name = name;
        this.category = category;
        this.description = description;
        this.imageUrl = imageUrl;
        this.price = price;
    }
}