import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BimViewerComponent } from './bim-viewer.component';

describe('BimViewerComponent', () => {
  let component: BimViewerComponent;
  let fixture: ComponentFixture<BimViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BimViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BimViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
