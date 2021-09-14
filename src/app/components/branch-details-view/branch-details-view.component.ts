import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-branch-details-view',
  templateUrl: './branch-details-view.component.html',
  styleUrls: ['./branch-details-view.component.css']
})
export class BranchDetailsViewComponent implements OnInit {

  branchId : string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => this.branchId = p.id);
  }

}
