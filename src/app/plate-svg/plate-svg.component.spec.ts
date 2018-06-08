import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateSvgComponent } from './plate-svg.component';

describe('PlateSvgComponent', () => {
  let component: PlateSvgComponent;
  let fixture: ComponentFixture<PlateSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlateSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlateSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
