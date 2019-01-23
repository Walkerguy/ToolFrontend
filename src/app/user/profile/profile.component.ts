import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService} from '../../services/auth.service';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
      console.log(this.user); 
      console.log(this.user.products); 
    },
      err => {
        console.log(err);
        return false;
      });
  }

}