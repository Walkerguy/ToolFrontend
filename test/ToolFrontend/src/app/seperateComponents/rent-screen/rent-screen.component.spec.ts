import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentScreenComponent } from './rent-screen.component';

describe('RentScreenComponent', () => {
  let component: RentScreenComponent;
  let fixture: ComponentFixture<RentScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
