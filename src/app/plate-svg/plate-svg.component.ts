import { Component, OnInit, Input } from '@angular/core';
import { PlateLayout } from '../plate-layout';
import { PlateType } from '../plate-type';

@Component({
  selector: 'app-plate-svg',
  templateUrl: './plate-svg.component.html',
  styleUrls: ['./plate-svg.component.css']
})
export class PlateSvgComponent implements OnInit {

  @Input() plateLayout: PlateLayout;

  constructor() { }

  ngOnInit() {

  }

  setFill(position: number, color: string) {
    this.plateLayout.positions[position - 1].fillColor = 'none';
  }

  clearFill(position: number) {
    console.log('Clear Fill on position: ' + position);
    this.plateLayout.positions[position - 1].fillColor = 'none';
  }

  getPlateType() {
    const plateTypeString = PlateType[this.plateLayout.plateType].toLowerCase();
    return '#' + plateTypeString;
  }

}
