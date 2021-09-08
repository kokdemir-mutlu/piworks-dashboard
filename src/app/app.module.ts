import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DxBoxModule, DxTextBoxModule, DxTreeListModule, DxAccordionModule, DxButtonModule, DxButtonGroupModule, DxTreeViewModule, DxListModule } from 'devextreme-angular';
import { LoginComponent } from './components/login/login.component';
import { ProjectContentsComponent } from './components/project-contents/project-contents.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { GroupNodeComponent } from './components/group-node/group-node.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent,
    ProjectContentsComponent,
    HomePageComponent,
    GroupNodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DxBoxModule,
    DxTreeViewModule,
    DxTextBoxModule,
    DxTreeListModule,
    MatIconModule,
    DxAccordionModule,
    ReactiveFormsModule,
    DxButtonModule,
    DxButtonGroupModule,
    DxListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
