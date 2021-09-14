import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-group-details-view',
  templateUrl: './group-details-view.component.html',
  styleUrls: ['./group-details-view.component.css']
})
export class GroupDetailsViewComponent implements OnInit {

  groupId : string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => this.groupId = p.id);
  }



}
