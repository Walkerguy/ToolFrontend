import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-tool-card',
  templateUrl: './tool-card.component.html',
  styleUrls: ['./tool-card.component.css']
})
export class ToolCardComponent implements OnInit {
  public activeProduct: any;

 
  products: Product[] = [
    new Product('Hammer', 'Hammer', 'Item used to hammer things', 'https://upload.wikimedia.org/wikipedia/commons/8/84/Claw-hammer.jpg', 1),
    new Product('Saw', 'Hammer', 'I just saw a guy saying the n-word', 'https://media.screwfix.com/is/image//ae235?src=ae235/32045_P&$prodImageMedium$', 2),
    new Product('Hit or miss', 'Hit or miss', 'I guess they never miss huh, mwah', 'https://pbs.twimg.com/media/Ds5mk0RU0AA1z_l.jpg', 5)
    
  ];
  constructor() { }

  ngOnInit() {
  }
  public openModal(product): void{
    // Copying object reference so we dont modify the original
    this.activeProduct = Object.assign({}, product);
}
}
