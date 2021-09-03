import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ReactiveFormsModule } from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TreeModulesComponent } from './components/tree-modules/tree-modules.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DxBoxModule, DxTextBoxModule, DxTreeListModule, DxAccordionModule, DxButtonModule, DxButtonGroupModule } from 'devextreme-angular';
import { LoginComponent } from './components/login/login.component';
import { ProjectContentsComponent } from './components/project-contents/project-contents.component';
import { HomePageComponent } from './components/home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TreeModulesComponent,
    SearchBoxComponent,
    LoginComponent,
    ProjectContentsComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DxBoxModule,
    DxTextBoxModule,
    DxTreeListModule,
    MatIconModule,
    DxAccordionModule,
    ReactiveFormsModule,
    DxButtonModule,
    DxButtonGroupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
