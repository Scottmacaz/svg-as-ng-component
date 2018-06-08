import {Component, OnInit} from '@angular/core';
import {PlateLayout} from './plate-layout';
import {PlatePosition} from './plate-position';

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent implements OnInit {

  plateLayout: PlateLayout;

  ngOnInit(): void {
    const platePositions = this.makePlatePositions();
    this.plateLayout = new PlateLayout(platePositions);
  }

  makePlatePositions() {
    let id = 0;
    const platePositions: PlatePosition[][] = [];
    for (let row = 0; row < 8; row++) {
      platePositions[row] = [];
      for (let column = 0; column < 12; column++) {
        platePositions[row][column] = new PlatePosition(id, row + 1, column + 1, `plate-pos-${row + 1}-${column + 1}`);
        id++;
      }
    }
    return platePositions;
  }
}
