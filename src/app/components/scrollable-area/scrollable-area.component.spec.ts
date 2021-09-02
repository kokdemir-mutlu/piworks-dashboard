import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollableAreaComponent } from './scrollable-area.component';

describe('ScrollableAreaComponent', () => {
  let component: ScrollableAreaComponent;
  let fixture: ComponentFixture<ScrollableAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollableAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollableAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
