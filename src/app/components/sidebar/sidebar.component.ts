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

  constructor(private modulesService: MockModulesService) { }

  ngOnInit(): void {
    this.getModules();
  }

  getModules():void{
    this.modulesService.getModules().subscribe(data => this.modules = data)
  }

}
