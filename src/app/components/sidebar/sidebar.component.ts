import { PIGroup } from './../../models/pi-group';
import { PIModule } from 'src/app/models/pi-module';
import { MockModulesService } from 'src/app/services/mock-modules.service';
import { Component, OnInit } from '@angular/core';
import { PIModule2 } from 'src/app/models/pi-modules2';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  modules : PIModule2[] = [];
  piGroups : PIGroup[] = [];

  constructor(private modulesService: MockModulesService) { }

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
    // node.itemData.expandItem(node.itemData.idForTreeView);

    console.log(node.itemData.name);
  }

}
