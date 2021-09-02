import { Component, OnInit } from '@angular/core';
import { PIModule } from 'src/app/models/pi-module';
import { MockModulesService } from 'src/app/services/mock-modules.service';

@Component({
  selector: 'app-tree-modules',
  templateUrl: './tree-modules.component.html',
  styleUrls: ['./tree-modules.component.css']
})
export class TreeModulesComponent implements OnInit {

  modules : PIModule[] = [];

  constructor(private moduleService:MockModulesService) { }

  ngOnInit(): void {
    this.getModules();
  }

  getModules():void{
    this.moduleService.getModules().subscribe(data => {
      this.modules = data;
    })
  }

}
