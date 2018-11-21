export class Product {

    public name: string;
    public category: string;
    public description: string;
    public imageUrl: string;

    constructor(name: string, category: string, description: string, imageUrl: string)
    {
        this.name = name;
        this.category = category;
        this.description = description;
        this.imageUrl = imageUrl;
    }
}