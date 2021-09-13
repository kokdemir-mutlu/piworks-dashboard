import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchDetailsViewComponent } from './branch-details-view.component';

describe('BranchDetailsViewComponent', () => {
  let component: BranchDetailsViewComponent;
  let fixture: ComponentFixture<BranchDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchDetailsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
