import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-tool-card',
  templateUrl: './tool-card.component.html',
  styleUrls: ['./tool-card.component.css']
})
export class ToolCardComponent implements OnInit {
  products: Product[] = [
    new Product('Hammer', 'Hammer', 'Item used to hammer things', 'https://upload.wikimedia.org/wikipedia/commons/8/84/Claw-hammer.jpg'),
    new Product('Saw', 'Hammer', 'I just saw a guy saying the n-word', 'https://media.screwfix.com/is/image//ae235?src=ae235/32045_P&$prodImageMedium$') 
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
