import { Component, OnInit } from '@angular/core';
import { PIModule2 } from 'src/app/models/pi-modules2';
import { MockModulesService } from 'src/app/services/mock-modules.service';

@Component({
  selector: 'app-project-contents',
  templateUrl: './project-contents.component.html',
  styleUrls: ['./project-contents.component.css']
})
export class ProjectContentsComponent implements OnInit {

  projectGroups : PIModule2[] = [];

  constructor(private projectsService:MockModulesService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects():void{
    this.projectsService.getModules().subscribe(data => this.projectGroups = data);
  }

  showBuilds():void{

  }

  showTrends():void{

  }

}
