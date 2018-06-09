import { LabwarePosition } from './labware-position';
import { LabwareLayout } from './labware-layout';
import { LabwareType } from './labware-type';

export class LabwareLayoutFactory {

  makePlate96Layout() {
    return this.makePlateLayout(8, 12, 62, 9.2, 34, 10, LabwareType.Plate96);
  }

  makeipT96Layout() {
    return this.makePlateLayout(8, 12, 62, 9.2, 34, 10, LabwareType.Tip96);
  }
  makePlate384Layout() {
    return this.makePlateLayout(16, 24, 55, 5, 29, 5, LabwareType.Plate384);
  }

  private makePlateLayout(numRows: number, numColumns: number, baseXcoordinate: number, xCoordinateSpacing: number,
     baseYcoordinate: number, yCoordinateSpacing: number, plateType: LabwareType) {
    let position = 1;
    const labwarePositions = new Array<LabwarePosition>();
    let currentXCoordinate = baseXcoordinate;
    let currentYCoordinate = baseYcoordinate;
    for (let row = 1; row <= numRows; row++) {
      for (let column = 1; column <= numColumns; column++) {
        labwarePositions.push(new LabwarePosition(position, row, column,
           currentXCoordinate, currentYCoordinate,  `plate-pos-${row}-${column}`, 'aqua'));
           currentXCoordinate += xCoordinateSpacing;
        position++;
      }
      currentYCoordinate += yCoordinateSpacing;
      currentXCoordinate = baseXcoordinate;
    }
    return new LabwareLayout(labwarePositions, plateType);
  }
}
