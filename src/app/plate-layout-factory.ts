import { PlatePosition } from './plate-position';
import { PlateLayout } from './plate-layout';
import { PlateType } from './plate-type';

export class PlateLayoutFactory {

  makePlate96Layout() {
    return this.makePlateLayout(8, 12, 62, 9.2, 34, 10, PlateType.Plate96);
  }

  makePlate384Layout() {
    return this.makePlateLayout(16, 24, 55, 5, 29, 5, PlateType.Plate384);
  }

  private makePlateLayout(numRows: number, numColumns: number, baseXcoordinate: number, xCoordinateSpacing: number,
     baseYcoordinate: number, yCoordinateSpacing: number, plateType: PlateType) {
    let position = 1;
    const platePositions = new Array<PlatePosition>();
    let currentXCoordinate = baseXcoordinate;
    let currentYCoordinate = baseYcoordinate;
    for (let row = 1; row <= numRows; row++) {
      for (let column = 1; column <= numColumns; column++) {
        platePositions.push(new PlatePosition(position, row, column,
           currentXCoordinate, currentYCoordinate,  `plate-pos-${row}-${column}`, 'aqua'));
           currentXCoordinate += xCoordinateSpacing;
        position++;
      }
      currentYCoordinate += yCoordinateSpacing;
      currentXCoordinate = baseXcoordinate;
    }
    return new PlateLayout(platePositions, plateType);
  }
}
