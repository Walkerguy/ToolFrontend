import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'voorbeeld';

  @ViewChild('mySideNav') public mySideNav: ElementRef;
  @ViewChild('menuButton') public menuButton: ElementRef;


  openNav(){
    this.mySideNav.nativeElement.style.width = '250px'
    this.menuButton.nativeElement.style.visibility = 'hidden'
  }

  closeNav(){
    this.mySideNav.nativeElement.style.width = '0px'
    this.menuButton.nativeElement.style.visibility = 'visible'
  }
}
