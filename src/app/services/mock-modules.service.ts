import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PIModule } from '../models/pi-module';
import { PIModule2 } from '../models/pi-modules2';

@Injectable({
  providedIn: 'root'
})
export class MockModulesService {

  modules : PIModule[] = [
    {id: 1, idForTreeView : '1', name: 'module1', projects: [
      {id: 1, idForTreeView : '1_1', name: 'project1'},
      {id: 2, idForTreeView : '1_2', name: 'project2'},
      {id: 3, idForTreeView : '1_3', name: 'project3'},
      {id: 4, idForTreeView : '1_4', name: 'project4'},
      ],
      modules: [
        {id: 2, idForTreeView : '2', name: 'module2', projects: [
          {id: 5, idForTreeView : '2_1', name: 'project5'},
          {id: 6, idForTreeView : '2_2', name: 'project6'},
          {id: 7, idForTreeView : '2_3', name: 'project7'},
          {id: 8, idForTreeView : '2_4', name: 'project8'},
          ],
          modules: [

          ]}
      ]},
    {id: 3, idForTreeView : '3', name: 'module3', projects: [
      {id: 9, idForTreeView : '3_1', name: 'project9'},
      {id: 10, idForTreeView : '3_2', name: 'project10'},
      {id: 11, idForTreeView : '3_3', name: 'project11'},
      {id: 12, idForTreeView : '3_4', name: 'project12'},
      ],
      modules: [
        {id: 4, idForTreeView : '4', name: 'module4', projects: [
          {id: 13, idForTreeView : '4_1', name: 'project13'},
          {id: 14, idForTreeView : '4_2', name: 'project14'},
          {id: 15, idForTreeView : '4_3', name: 'project15'},
          {id: 16, idForTreeView : '4_4', name: 'project16'},
          ],
          modules: [

          ]}
      ]}
  ];

  modules2 : PIModule2[] = [{
  id: "1",
    text: "Stores",
    expanded: true,
    items: [{
        id: "1_1",
        text: "Super Mart of the West",
        expanded: true,
        items: [{
            id: "1_1_1",
            text: "Video Players",
            items: [{
                id: "1_1_1_1",
                text: "HD Video Player",
                price: 220
            }, {
                id: "1_1_1_2",
                text: "SuperHD Video Player",
                price: 270
            }]
        }, {
            id: "1_1_2",
            text: "Televisions",
            expanded: true,
            items: [{
                id: "1_1_2_1",
                text: "SuperLCD 42",
                price: 1200
            }, {
                id: "1_1_2_2",
                text: "SuperLED 42",
                price: 1450
            }, {
                id: "1_1_2_3",
                text: "SuperLED 50",
                price: 1600
            }, {
                id: "1_1_2_4",
                text: "SuperLCD 55",
                price: 1350
            }, {
                id: "1_1_2_5",
                text: "SuperLCD 70",
                price: 4000
            }]
        }, {
            id: "1_1_3",
            text: "Monitors",
            expanded: true,
            items: [{
                id: "1_1_3_1",
                text: "19\"",
                expanded: true,
                items: [{
                    id: "1_1_3_1_1",
                    text: "DesktopLCD 19",
                    price: 160
                }]
            }, {
                id: "1_1_3_2",
                text: "21\"",
                items: [{
                    id: "1_1_3_2_1",
                    text: "DesktopLCD 21",
                    price: 170
                }, {
                    id: "1_1_3_2_2",
                    text: "DesktopLED 21",
                    price: 175
                }]
            }]
        }, {
            id: "1_1_4",
            text: "Projectors",
            items: [{
                id: "1_1_4_1",
                text: "Projector Plus",
                price: 550
            }, {
                id: "1_1_4_2",
                text: "Projector PlusHD",
                price: 750
            }]
        }]

    }, {
        id: "1_2",
        text: "Braeburn",
        items: [{
            id: "1_2_1",
            text: "Video Players",
            items: [{
                id: "1_2_1_1",
                text: "HD Video Player",
                price: 240
            }, {
                id: "1_2_1_2",
                text: "SuperHD Video Player",
                price: 300
            }]
        }, {
            id: "1_2_2",
            text: "Televisions",
            items: [{
                id: "1_2_2_1",
                text: "SuperPlasma 50",
                price: 1800
            }, {
                id: "1_2_2_2",
                text: "SuperPlasma 65",
                price: 3500
            }]
        }, {
            id: "1_2_3",
            text: "Monitors",
            items: [{
                id: "1_2_3_1",
                text: "19\"",
                items: [{
                    id: "1_2_3_1_1",
                    text: "DesktopLCD 19",
                    price: 170
                }]
            }, {
                id: "1_2_3_2",
                text: "21\"",
                items: [{
                    id: "1_2_3_2_1",
                    text: "DesktopLCD 21",
                    price: 180
                }, {
                    id: "1_2_3_2_2",
                    text: "DesktopLED 21",
                    price: 190
                }]
            }]
        }]

    }, {
        id: "1_3",
        text: "E-Mart",
        items: [{
            id: "1_3_1",
            text: "Video Players",
            items: [{
                id: "1_3_1_1",
                text: "HD Video Player",
                price: 220
            }, {
                id: "1_3_1_2",
                text: "SuperHD Video Player",
                price: 275
            }]
        }, {
            id: "1_3_3",
            text: "Monitors",
            items: [{
                id: "1_3_3_1",
                text: "19\"",
                items: [{
                    id: "1_3_3_1_1",
                    text: "DesktopLCD 19",
                    price: 165
                }]
            }, {
                id: "1_3_3_2",
                text: "21\"",
                items: [{
                    id: "1_3_3_2_1",
                    text: "DesktopLCD 21",
                    price: 175
                }]
            }]
        }]
    }, {
        id: "1_4",
        text: "Walters",
        items: [{
            id: "1_4_1",
            text: "Video Players",
            items: [{
                id: "1_4_1_1",
                text: "HD Video Player",
                price: 210
            }, {
                id: "1_4_1_2",
                text: "SuperHD Video Player",
                price: 250
            }]
        }, {
            id: "1_4_2",
            text: "Televisions",
            items: [{
                id: "1_4_2_1",
                text: "SuperLCD 42",
                price: 1100
            }, {
                id: "1_4_2_2",
                text: "SuperLED 42",
                price: 1400
            }, {
                id: "1_4_2_3",
                text: "SuperLED 50",
                price: 1500
            }, {
                id: "1_4_2_4",
                text: "SuperLCD 55",
                price: 1300
            }, {
                id: "1_4_2_5",
                text: "SuperLCD 70",
                price: 4000
            }, {
                id: "1_4_2_6",
                text: "SuperPlasma 50",
                price: 1700
            }]
        }, {
            id: "1_4_3",
            text: "Monitors",
            items: [{
                id: "1_4_3_1",
                text: "19\"",
                items: [{
                    id: "1_4_3_1_1",
                    text: "DesktopLCD 19",
                    price: 160
                }]
            }, {
                id: "1_4_3_2",
                text: "21\"",
                items: [{
                    id: "1_4_3_2_1",
                    text: "DesktopLCD 21",
                    price: 170
                }, {
                    id: "1_4_3_2_2",
                    text: "DesktopLED 21",
                    price: 180
                }]
            }]
        }, {
            id: "1_4_4",
            text: "Projectors",
            items: [{
                id: "1_4_4_1",
                text: "Projector Plus",
                price: 550
            }, {
                id: "1_4_4_2",
                text: "Projector PlusHD",
                price: 750
            }]
        }]

    }]
}];

  constructor() { }

  getModules(): Observable<PIModule2[]> {
    return of(this.modules2);
  }

}
