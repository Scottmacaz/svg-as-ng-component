import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabwareComponent } from './labware.component';

describe('PlateSvgComponent', () => {
  let component: LabwareComponent;
  let fixture: ComponentFixture<LabwareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
