import { Component, OnInit, ViewChild } from '@angular/core';
import { DxScrollViewComponent } from 'devextreme-angular';

@Component({
  selector: 'app-scrollable-area',
  templateUrl: './scrollable-area.component.html',
  styleUrls: ['./scrollable-area.component.css'],
})
export class ScrollableAreaComponent implements OnInit {
  @ViewChild(DxScrollViewComponent, { static: false }) scrollView:
    | DxScrollViewComponent
    | undefined;

  updateContentTimer: number | undefined;
  scrollByContent = true;
  scrollByThumb = true;
  scrollbarMode: string = 'On Scroll';
  pullDown = false;

  constructor() {}

  ngOnInit(): void {}
}
