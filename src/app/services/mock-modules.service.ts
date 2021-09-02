import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PIModule } from '../models/pi-module';

@Injectable({
  providedIn: 'root'
})
export class MockModulesService {

  modules : PIModule[] = [
    {id: 1, headId : -1, idForTreeList: 1, name : 'Module1',
      projects : [{id: 1, headId: 1, idForTreeList: 0, name : 'project1'},
                  {id: 2, headId: 1, idForTreeList: 0, name: 'project2'}]},

    {id: 2, headId : -1, idForTreeList: 2, name : 'Module1',
      projects : [{id: 3, headId: 2, idForTreeList: 0, name : 'project1'},
                  {id: 4, headId: 2, idForTreeList: 0, name: 'project2'}]},

    {id: 3, headId : -1, idForTreeList: 3, name : 'Module1',
      projects : [{id: 3, headId: 3, idForTreeList: 0, name : 'project1'},
                  {id: 4, headId: 3, idForTreeList: 0, name: 'project2'}]},

    {id: 4, headId : 1, idForTreeList: 4, name : 'Module1',
      projects : [{id: 1, headId: 4, idForTreeList: 0, name : 'project1'},
                  {id: 2, headId: 4, idForTreeList: 0, name: 'project2'}]},

    {id: 5, headId : 2, idForTreeList: 2, name : 'Module1',
      projects : [{id: 3, headId: 2, idForTreeList: 0, name : 'project1'},
                  {id: 4, headId: 2, idForTreeList: 0, name: 'project2'}]},

    {id: 6, headId : 3, idForTreeList: 2, name : 'Module1',
      projects : [{id: 3, headId: 2, idForTreeList: 0, name : 'project1'},
                  {id: 4, headId: 2, idForTreeList: 0, name: 'project2'}]}
  ];

  constructor() { }

  getModules(): Observable<PIModule[]> {
    return of(this.modules);
  }

}
