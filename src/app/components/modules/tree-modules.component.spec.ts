import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeModulesComponent } from './tree-modules.component';

describe('TreeModulesComponent', () => {
  let component: TreeModulesComponent;
  let fixture: ComponentFixture<TreeModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeModulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
