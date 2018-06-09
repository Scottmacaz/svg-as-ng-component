import {Component, OnInit} from '@angular/core';
import {PlateLayout} from './plate-layout';
import {PlatePosition} from './plate-position';
import { PlateLayoutFactory } from './plate-layout-factory';

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent implements OnInit {

  plateLayout96: PlateLayout;
  plateLayout384: PlateLayout;

  positionToChange = 42;
  positionToChangeColor = 'red';

  ngOnInit(): void {
    const plateLayoutFactory = new PlateLayoutFactory();
    this.plateLayout96 = plateLayoutFactory.makePlate96Layout();
    this.plateLayout384 = plateLayoutFactory.makePlate384Layout();
  }

  changeColor() {
    console.log(`Changing position ${this.positionToChange} to color: ${this.positionToChangeColor}`);
    this.plateLayout96.positions[this.positionToChange - 1].fillColor = this.positionToChangeColor;
  }


}
