import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProjectDetailsViewComponent } from './components/project-details-view/project-details-view.component';
import { GroupDetailsViewComponent } from './components/group-details-view/group-details-view.component';
import { BranchDetailsViewComponent } from './components/branch-details-view/branch-details-view.component';

const routes: Routes = [
  {path: 'home',
    component: HomePageComponent,
    children: [
      {path: 'groups/:id', component: GroupDetailsViewComponent, outlet:'content'},
      {path: 'projects/:id', component: ProjectDetailsViewComponent, outlet:'content'},
      {path: 'branches/:id', component: BranchDetailsViewComponent, outlet:'content'},
      ]
  },
  {path: '', pathMatch: 'full', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
