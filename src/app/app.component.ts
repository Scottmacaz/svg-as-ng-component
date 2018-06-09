import {Component, OnInit} from '@angular/core';
import {LabwareLayout} from './labware-layout';
import {LabwarePosition} from './labware-position';
import { LabwareLayoutFactory } from './labware-layout-factory';

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent implements OnInit {

  plateLayout96: LabwareLayout;
  plateLayout384: LabwareLayout;
  tipLayout96: LabwareLayout;

  positionToChange = 42;
  positionToChangeColor = 'red';

  ngOnInit(): void {
    const plateLayoutFactory = new LabwareLayoutFactory();
    this.plateLayout96 = plateLayoutFactory.makePlate96Layout();
    this.plateLayout384 = plateLayoutFactory.makePlate384Layout();
    this.tipLayout96 = plateLayoutFactory.makeipT96Layout();
  }

  changeColor() {
    console.log(`Changing position ${this.positionToChange} to color: ${this.positionToChangeColor}`);
    this.plateLayout96.positions[this.positionToChange - 1].fillColor = this.positionToChangeColor;
  }


}
