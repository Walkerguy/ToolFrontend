import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolsComponent } from './tools/tools.component';
import { HeaderComponent } from './header/header.component';
import { ToolsListComponent } from './tools/tools-list/tools-list.component';
import { ToolsItemComponent } from './tools/tools-list/tools-item/tools-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolsComponent,
    HeaderComponent,
    ToolsListComponent,
    ToolsItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
