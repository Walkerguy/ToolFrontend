import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsItemComponent } from './tools-item.component';

describe('ToolsItemComponent', () => {
  let component: ToolsItemComponent;
  let fixture: ComponentFixture<ToolsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
