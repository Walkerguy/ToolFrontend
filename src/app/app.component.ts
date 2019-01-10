import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'voorbeeld';

  @ViewChild('mySideNav') public mySideNav: ElementRef;


  openNav(){
    this.mySideNav.nativeElement.style.width = '250px'
  }

  closeNav(){
    this.mySideNav.nativeElement.style.width = '0px'
  }
}
