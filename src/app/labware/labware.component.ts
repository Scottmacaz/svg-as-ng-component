import { Component, OnInit, Input } from '@angular/core';
import { LabwareLayout } from '../labware-layout';
import { LabwareType } from '../labware-type';

@Component({
  selector: 'app-labware',
  templateUrl: './labware.component.html',
  styleUrls: ['./labware.component.css']
})
export class LabwareComponent implements OnInit {

  @Input() labwareLayout: LabwareLayout;

  constructor() { }

  ngOnInit() {

  }

  setFill(position: number, color: string) {
    this.labwareLayout.positions[position - 1].fillColor = 'none';
  }

  clearFill(position: number) {
    console.log('Clear Fill on position: ' + position);
    this.labwareLayout.positions[position - 1].fillColor = 'none';
  }

  getPlateType() {
    const plateTypeString = LabwareType[this.labwareLayout.plateType].toLowerCase();
    return '#' + plateTypeString;
  }

}
