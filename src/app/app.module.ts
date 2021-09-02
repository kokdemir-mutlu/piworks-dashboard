import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxResponsiveBoxModule, DxAccordionModule, DxScrollViewModule, DxTextBoxModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ModulesComponent } from './components/modules/modules.component';
import { ScrollableAreaComponent } from './components/scrollable-area/scrollable-area.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ModulesComponent,
    ScrollableAreaComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxResponsiveBoxModule,
    DxAccordionModule,
    DxScrollViewModule,
    DxTextBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
