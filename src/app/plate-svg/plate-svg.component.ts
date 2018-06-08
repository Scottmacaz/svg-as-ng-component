import { Component, OnInit, Input } from '@angular/core';
import { PlateLayout } from '../plate-layout';

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

  clearFill(position: number) {
    console.log('Clear Fill on position: ' + position);
    this.plateLayout.positions[position - 1].className = 'fill-none';
  }

}
