import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PIModule } from '../models/pi-module';

@Injectable({
  providedIn: 'root'
})
export class MockModulesService {

  // modules : PIModule[] = [
  //   {id: 1, headId : -1, idForTreeList: 1, name : 'Module1',
  //     projects : [{id: 1, headId: 1, idForTreeList: 0, name : 'project1'},
  //                 {id: 2, headId: 1, idForTreeList: 0, name: 'project2'}]},

  //   {id: 2, headId : -1, idForTreeList: 2, name : 'Module1',
  //     projects : [{id: 3, headId: 2, idForTreeList: 0, name : 'project1'},
  //                 {id: 4, headId: 2, idForTreeList: 0, name: 'project2'}]},

  //   {id: 3, headId : -1, idForTreeList: 3, name : 'Module1',
  //     projects : [{id: 3, headId: 3, idForTreeList: 0, name : 'project1'},
  //                 {id: 4, headId: 3, idForTreeList: 0, name: 'project2'}]},

  //   {id: 4, headId : 1, idForTreeList: 4, name : 'Module1',
  //     projects : [{id: 1, headId: 4, idForTreeList: 0, name : 'project1'},
  //                 {id: 2, headId: 4, idForTreeList: 0, name: 'project2'}]},

  //   {id: 5, headId : 2, idForTreeList: 5, name : 'Module1',
  //     projects : [{id: 3, headId: 2, idForTreeList: 0, name : 'project1'},
  //                 {id: 4, headId: 2, idForTreeList: 0, name: 'project2'}]},

  //   {id: 6, headId : 3, idForTreeList: 6, name : 'Module1',
  //     projects : [{id: 3, headId: 2, idForTreeList: 0, name : 'project1'},
  //                 {id: 4, headId: 2, idForTreeList: 0, name: 'project2'}]}
  // ];

  modules : PIModule[] = [
    {id: 1, name: 'module1', projects: [
      {id: 1, name: 'project1'},
      {id: 2, name: 'project2'},
      {id: 3, name: 'project3'},
      {id: 4, name: 'project4'},
      ],
      modules: [
        {id: 2, name: 'module2', projects: [
          {id: 5, name: 'project5'},
          {id: 6, name: 'project6'},
          {id: 7, name: 'project7'},
          {id: 8, name: 'project8'},
          ],
          modules: [

          ]}
      ]},
    {id: 3, name: 'module3', projects: [
      {id: 9, name: 'project9'},
      {id: 10, name: 'project10'},
      {id: 11, name: 'project11'},
      {id: 12, name: 'project12'},
      ],
      modules: [
        {id: 4, name: 'module4', projects: [
          {id: 13, name: 'project13'},
          {id: 14, name: 'project14'},
          {id: 15, name: 'project15'},
          {id: 16, name: 'project16'},
          ],
          modules: [

          ]}
      ]}
  ];

  constructor() { }

  getModules(): Observable<PIModule[]> {
    return of(this.modules);
  }

}
