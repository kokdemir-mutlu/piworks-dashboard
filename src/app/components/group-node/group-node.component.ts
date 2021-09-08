import { Component, Input, OnInit } from '@angular/core';
import { PIModule2 } from 'src/app/models/pi-modules2';

@Component({
  selector: 'app-group-node',
  templateUrl: './group-node.component.html',
  styleUrls: ['./group-node.component.css']
})
export class GroupNodeComponent implements OnInit {

  @Input() groupNode : PIModule2 = {
    id : '',
    text : ''
  };

  expandChildNodes = false;
  isGroup = false;

  constructor() { }

  ngOnInit(): void {
    if(this.groupNode.items){
      this.isGroup = true;
    }
  }

  expand():void{
    this.expandChildNodes = !this.expandChildNodes;
  }

}
