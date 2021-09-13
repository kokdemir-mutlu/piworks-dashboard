import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DxBoxModule, DxTextBoxModule, DxTreeListModule, DxAccordionModule, DxButtonModule, DxButtonGroupModule, DxTreeViewModule, DxListModule, DxDataGridModule } from 'devextreme-angular';
import { LoginComponent } from './components/login/login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProjectDetailsViewComponent } from './components/project-details-view/project-details-view.component';
import { BuildDetailsComponent } from './components/build-details/build-details.component';
import { GroupDetailsViewComponent } from './components/group-details-view/group-details-view.component';
import { BranchDetailsViewComponent } from './components/branch-details-view/branch-details-view.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent,
    ProjectDetailsViewComponent,
    HomePageComponent,
    ProjectDetailsViewComponent,
    BuildDetailsComponent,
    GroupDetailsViewComponent,
    BranchDetailsViewComponent
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
    DxListModule,
    DxDataGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
