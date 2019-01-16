import { Component, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService){}

  onLogOutClick(){
    this.authService.logout();
    this.flashMessage.show("Logged out successfuly!", {cssClass: 'alert-success', timeout: 3000});
    this.router.navigate(['/']);
    return false;
  }


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
