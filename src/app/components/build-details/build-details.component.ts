import { ProjectBranch } from '../../models/project-branch';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-build-details',
  templateUrl: './build-details.component.html',
  styleUrls: ['./build-details.component.css']
})
export class BuildDetailsComponent implements OnInit {

  // @Input() projectBranch: ProjectBranch = {
  //   id : 0,
  //   idForTreeView : '',
  //   buildNumberDetails : [],
  //   status : '',
  //   changes : [], // names
  //   agent : '',
  //   started : '',
  //   duration : ''
  // };

  constructor() { }

  ngOnInit(): void {
  }

}
