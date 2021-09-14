import { ProjectBranch } from './../models/project-branch';
import { PIProject } from './../models/pi-project';
import { PIGroup } from './../models/pi-group';
import { BuildNumberDetail } from './../models/build-number-detail';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PIModule } from '../models/pi-module';
import { PIModule2 } from '../models/pi-modules2';

@Injectable({
  providedIn: 'root'
})
export class MockModulesService {

  buildNumberDetails : BuildNumberDetail[] = [
    {
      id : 1,
      name : '#123',
      idForTreeView : 'string1',
      buildNumber: 'string2',
      overview : 'string3',
      changes : ['string4','string5'],
      tests: ['string4','string5'],
      buildLog: 'string4',
      parameters: ['string4','string5'],
      issues: ['string4','string5'],
      artifacts: ['string4','string5'],
      nugetPackages: ['string4','string5'],
      zipSecurity: 'string5'
    },
    {
      id : 2,
      name : '#223',
      idForTreeView : 'string12',
      buildNumber: 'string22',
      overview : 'string33',
      changes : ['string43','string5'],
      tests: ['string42','string5'],
      buildLog: 'string41',
      parameters: ['string44','string5'],
      issues: ['string4','string5'],
      artifacts: ['string4','string5'],
      nugetPackages: ['string4','string5'],
      zipSecurity: 'string5'
    },
    {
      id : 3,
      name : '#323',
      idForTreeView : 'string13',
      buildNumber: 'string25',
      overview : 'string33',
      changes : ['string4','string57'],
      tests: ['string4','string5'],
      buildLog: 'string4',
      parameters: ['string4','string5'],
      issues: ['string4','string5'],
      artifacts: ['string4','string5'],
      nugetPackages: ['string4','string5'],
      zipSecurity: 'string5'
    },
    {
      id : 4,
      name : '#423',
      idForTreeView : 'string14',
      buildNumber: 'string27',
      overview : 'string34',
      changes : ['string4','string5'],
      tests: ['string4','string5'],
      buildLog: 'string4',
      parameters: ['string4','string5'],
      issues: ['string4','string5'],
      artifacts: ['string4','string5'],
      nugetPackages: ['string4','string5'],
      zipSecurity: 'string5'
    }
  ];




  group1Project1Branches : ProjectBranch[] = [
    {
      id : 1,
      name : 'branch1_1_1',
      idForTreeView : '1_1_1',
      buildNumberDetails : this.buildNumberDetails,
      status : 'success',
      changes : [],
      agent : 'agent1',
      started : 'a date',
      duration : 'a duration'
    },
    {
      id : 2,
      name : 'branch1_1_2',
      idForTreeView : '1_1_2',
      buildNumberDetails : [],
      status : 'success',
      changes : [],
      agent : 'agent1',
      started : 'a date',
      duration : 'a duration'
    },
    {
      id : 3,
      name : 'branch1_1_3',
      idForTreeView : '1_1_3',
      buildNumberDetails : [],
      status : 'success',
      changes : [],
      agent : 'agent1',
      started : 'a date',
      duration : 'a duration'
    }
  ];

  group1Projects : PIProject[] = [
    {
      id : 1,
      idForTreeView : '1_1',
      name : 'project1_1',
      children : this.group1Project1Branches
    },
    {
      id : 2,
      idForTreeView : '1_2',
      name : 'project1_2',
      children : []
    },
    {
      id : 3,
      idForTreeView : '1_3',
      name : 'project1_3',
      children : []
    },
    {
      id : 4,
      idForTreeView : '1_4',
      name : 'project1_4',
      children : []
    },
    {
      id : 5,
      idForTreeView : '1_5',
      name : 'project1_5',
      children : []
    }
  ];

  getGroup1Project(id: string):PIProject | undefined{
    return this.group1Projects.find(project => {
        return parseInt(id) === project.id;
    });
  }

  group2Project1Branches : ProjectBranch[] = [
    {
      id : 1,
      name : 'branch2_1_1',
      idForTreeView : '2_1_1',
      buildNumberDetails : [],
      status : 'success',
      changes : [],
      agent : 'agent2',
      started : 'a date',
      duration : 'a duration'
    },
    {
      id : 2,
      name : 'branch2_1_2',
      idForTreeView : '2_1_2',
      buildNumberDetails : [],
      status : 'success',
      changes : [],
      agent : 'agent2',
      started : 'a date',
      duration : 'a duration'
    },
    {
      id : 3,
      name : 'branch2_1_3',
      idForTreeView : '2_1_3',
      buildNumberDetails : [],
      status : 'success',
      changes : [],
      agent : 'agent1',
      started : 'a date',
      duration : 'a duration'
    }
  ];

  group2Projects : PIProject[] = [
    {
      id : 1,
      idForTreeView : '2_1',
      name : 'project1',
      children : this.group2Project1Branches
    },
    {
      id : 2,
      idForTreeView : '2_2',
      name : 'project2',
      children : []
    },
    {
      id : 3,
      idForTreeView : '2_3',
      name : 'project3',
      children : []
    },
    {
      id : 4,
      idForTreeView : '2_4',
      name : 'project4',
      children : []
    },
    {
      id : 5,
      idForTreeView : '2_5',
      name : 'project5',
      children : []
    }
  ];

  group4Projects : PIProject[] = [
    {
      id : 1,
      idForTreeView : '2_6_1',
      name : 'project1',
      children : []
    },
    {
      id : 2,
      idForTreeView : '2_6_2',
      name : 'project2',
      children : []
    },
    {
      id : 3,
      idForTreeView : '2_6_3',
      name : 'project3',
      children : []
    },
    {
      id : 4,
      idForTreeView : '2_6_4',
      name : 'project4',
      children : []
    },
    {
      id : 5,
      idForTreeView : '2_6_5',
      name : 'project5',
      children : []
    }
  ];



  // piGroups : PIGroup[] = [
  //   {
  //     id : 1,
  //     idForTreeView : '1',
  //     name : 'group1',
  //     projects : this.group1Projects,
  //     subGroups: []
  //   },
  //   {
  //     id : 2,
  //     idForTreeView : '2',
  //     name : 'group2',
  //     projects : this.group2Projects,
  //     subGroups: [
  //       {
  //         id : 4,
  //         idForTreeView : '2_6',
  //         name : 'group4',
  //         projects : this.group4Projects,
  //         subGroups: []
  //       }
  //     ]
  //   },
  //   {
  //     id : 3,
  //     idForTreeView : '3',
  //     name : 'group3',
  //     projects : [],
  //     subGroups: []
  //   }
  // ];

  piGroups2 : PIGroup[] = [
    {
      id : 1,
      idForTreeView : '1',
      name : 'group1',
      children : this.group1Projects
    },
    {
      id : 2,
      idForTreeView : '2',
      name : 'group2',
      children : [
        ...this.group2Projects,
        ...[
          {
            id : 4,
            idForTreeView : '2_6',
            name : 'group4',
            children : this.group4Projects
          }
        ]
      ]
    },
    {
      id : 3,
      idForTreeView : '3',
      name : 'group3',
      children : []
    }
  ];

  getGroups():Observable<PIGroup[]>{
    return of(this.piGroups2);
  }


  getBuildNumberDetails():Observable<BuildNumberDetail[]>{
    return of(this.buildNumberDetails);
  }

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
