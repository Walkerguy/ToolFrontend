export class Tool {
   public name: string;
   public description: string;
   public imagePath: string;
//    public toolCategory: string;  

   constructor(name: string, description: string, imagePath: string) {
       this.name = name;
       this.description = description;
       this.imagePath = imagePath;
   }
}