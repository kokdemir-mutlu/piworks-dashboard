import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TreeModulesComponent } from './components/modules/tree-modules.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DxBoxModule, DxTextBoxModule, DxTreeListModule } from 'devextreme-angular';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TreeModulesComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DxBoxModule,
    DxTextBoxModule,
    DxTreeListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
