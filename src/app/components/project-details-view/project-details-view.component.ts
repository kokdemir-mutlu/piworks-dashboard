import { Component, OnInit } from '@angular/core';
import { PIModule2 } from 'src/app/models/pi-modules2';
import { MockModulesService } from 'src/app/services/mock-modules.service';

@Component({
  selector: 'app-project-details-view',
  templateUrl: './project-details-view.component.html',
  styleUrls: ['./project-details-view.component.css']
})
export class ProjectDetailsViewComponent implements OnInit {


  projectGroups : PIModule2[] = [];

  constructor(private projectsService:MockModulesService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects():void{
    this.projectsService.getModules().subscribe(data => this.projectGroups = data);
  }

  showBuilds(e:any):void{

  }

  showTrends(e:any):void{

  }

  expandAll(e:any):void{

  }

  expandClick(e: any){
    console.log(e);
  }

}
