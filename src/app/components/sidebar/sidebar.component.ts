import { PIGroup } from './../../models/pi-group';
import { PIModule } from 'src/app/models/pi-module';
import { MockModulesService } from 'src/app/services/mock-modules.service';
import { Component, OnInit } from '@angular/core';
import { PIModule2 } from 'src/app/models/pi-modules2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  modules : PIModule2[] = [];
  piGroups : PIGroup[] = [];

  constructor(private modulesService: MockModulesService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getModules();
    this.getGroups();
  }

  getGroups():void{
    this.modulesService.getGroups().subscribe(data => this.piGroups = data);
  }

  getModules():void{
    this.modulesService.getModules().subscribe(data => this.modules = data)
  }

  onItemClick(event:any):void{
    var node = event.node;
    const name = node.itemData.name;
    const id = node.itemData.id;

    if(node.itemData.name.includes('group')){
      // it is a group item

      console.log('it is a group item and its name : ' + name + ' and its id : ' + id);
      this.router.navigate([{ outlets: {content: ['groups', id]}}], {relativeTo: this.route});
    }
    else if(node.itemData.name.includes('project')){
      // it is a project item

      console.log('it is a project item and its name : ' + name + ' and its id : ' + id);
      this.router.navigate([{outlets: {content: ['projects', id]}}], {relativeTo: this.route});
    }
    else if(node.itemData.name.includes('branch')){
      // it is a project item

      console.log('it is a branch item and its name : ' + name + ' and its id : ' + id);
      this.router.navigate([{outlets: {content: ['branches', id]}}], {relativeTo: this.route});
    }
  }

}
