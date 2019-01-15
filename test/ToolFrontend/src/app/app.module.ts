import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule} from "@angular/material";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolCardComponent } from './seperatecomponents/tool-card/tool-card.component';
import { ToolOfferComponent } from './seperatecomponents/tool-offer/tool-offer.component';
import { RentScreenComponent } from './seperatecomponents/rent-screen/rent-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolCardComponent,
    ToolOfferComponent,
    RentScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
