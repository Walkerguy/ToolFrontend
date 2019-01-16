import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Routes, RouterModule} from '@angular/router';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FlashMessagesModule} from 'angular2-flash-messages';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';

import { ValidateService} from './services/validate.service';
import { AuthService} from './services/auth.service';
import {ProductService} from './services/product.service';
import {LoanService} from './services/loan.service';

import {AuthGuard} from './guards/auth.guard';
import { AuthAdminGuard } from './guards/auth-admin.guard';
import { from } from 'rxjs';

const appRoutes : Routes = [
  { path: '', component: DashboardComponent},
  { path: 'user/login', component: LoginComponent},
  { path: 'user/register', component: RegisterComponent},
  { path: 'user/profile', component: ProfileComponent, canActivate:[AuthGuard]}

];

//Om een Route te beveiligen voeg "canActivate:[AuthGuard]" toe achter de route. Voorbeeld: { path: 'user/register', component: RegisterComponent, canActivate:[AuthGuard]}
// Om de Route alleen voor Admins beschikbaar te maken doet men hetzelfde, alleen met "canActivate:[AuthAdminGuard]"



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [ProductService,LoanService,ValidateService, AuthService, AuthGuard, AuthAdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
