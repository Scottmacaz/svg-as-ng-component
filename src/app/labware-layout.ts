import { LabwarePosition } from './labware-position';
import { LabwareType } from './labware-type';

export class LabwareLayout {
  constructor(public positions: Array<LabwarePosition>,
  public plateType: LabwareType) {
  }


}
