import {Component, OnInit} from '@angular/core';
import {PlateLayout} from './plate-layout';
import {PlatePosition} from './plate-position';

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent implements OnInit {

  plateLayout: PlateLayout;

  ngOnInit(): void {
    const platePositionMap = this.makePlatePositions();
    this.plateLayout = new PlateLayout(platePositionMap);
  }

  makePlatePositions() {
    let position = 1;
    const baseXCoordinate = 62;
    const baseYCoordinate = 32;
    const platePositions = new Array<PlatePosition>();
    let currentXCoordinate = baseXCoordinate;
    let currentYCoordinate = baseYCoordinate;
    for (let row = 1; row < 9; row++) {
      for (let column = 1; column < 13; column++) {
        platePositions.push(new PlatePosition(position, row, column,
           currentXCoordinate, currentYCoordinate,  `plate-pos-${row}-${column}`));
           currentXCoordinate += 9;
        position++;
      }
      currentYCoordinate += 10;
      currentXCoordinate = baseXCoordinate;
    }
    debugger;
    return platePositions;
  }
}
