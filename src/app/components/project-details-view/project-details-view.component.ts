import { ProjectBranch } from '../../models/project-branch';
import { BuildNumberDetail } from './../../models/build-number-detail';
import { Component, OnInit } from '@angular/core';
import { PIModule2 } from 'src/app/models/pi-modules2';
import { MockModulesService } from 'src/app/services/mock-modules.service';
import { PIGroup } from 'src/app/models/pi-group';
import { ActivatedRoute } from '@angular/router';
import { PIProject } from 'src/app/models/pi-project';



@Component({
  selector: 'app-project-details-view',
  templateUrl: './project-details-view.component.html',
  styleUrls: ['./project-details-view.component.css'],
})
export class ProjectDetailsViewComponent implements OnInit {
  projectGroups: PIModule2[] = [];

  projectGroups2 : PIGroup[] = [];

  project : PIProject = {
    id : 0,
    idForTreeView : '',
    name : '',
    children : [
      {
        id: 0,
        name : '',
        idForTreeView : '',
        buildNumberDetails : [],
        status : '',
        changes : [],
        agent : '',
        started : '',
        duration : ''
      }
    ]
  }

  projects: PIProject[] = [];

  projectId : string = '';

  constructor(private projectsService: MockModulesService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.getProjects();
    // this.getBuildNumberDetails();
    // this.getGroups();

    this.route.params.subscribe(p => this.projectId = p.id)
    var p = this.projectsService.getGroup1Project(this.projectId);
    if(p !== undefined)
      this.project = p;


    // this.trialFuntion();
  }

  getProjects(): void {
    this.projectsService
      .getModules()
      .subscribe((data) => (this.projectGroups = data));
  }



  buildNumberDetails : BuildNumberDetail[] = [];
  getBuildNumberDetails():void{
    this.projectsService
      .getBuildNumberDetails()
      .subscribe((data) => (this.buildNumberDetails));
  }


  getGroups():void{
    this.projectsService.getGroups().subscribe(data => this.projectGroups2 = data);
  }


  trialFuntion():void{
    var items = this.projectGroups2[1].children;
    items.forEach(element => {
      if(element.name.includes('group')){
        console.log('this element is a group and its name is : ' + element.name);
      }
      else{
        console.log('this element is a project and its name is : ' + element.name);
      }
    });
  }

  runTheBranch(e: any):void{}

  showBuilds(e: any): void {}

  showTrends(e: any): void {}

  expandAll(e: any): void {}

  expandClick(e: any) {
    console.log(e);
  }

  accordionData = [
    {
      title: 'Personal Data',
      firstName: 'John',
      lastName: 'Smith',
      birthYear: 1986,
    },
    {
      title: 'Contacts',
      phone: '(555)555-5555',
      email: 'John.Smith@example.com',
    },
    {
      title: 'Address',
      state: 'CA',
      city: 'San Francisco',
      street: 'Stanford Ave',
    },
  ];
  getItemKeys(item: any) {
    return Object.keys(item);
  }

  // another sample
  accordionData2 = [
    {
      firstName: 'John',
      lastName: 'Smith',
      birthDate: '1986/03/14',
      position: 'Network Administrator',
    },
    {
      firstName: 'Samantha',
      lastName: 'Jones',
      birthDate: '1972/11/13',
      position: 'Technical Writer',
    },
  ];
}
