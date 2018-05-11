import { Component, OnInit, Input } from '@angular/core';
import { Raid } from '../shared/model/raid';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'raid-item',
  templateUrl: './raid-item.component.html',
  styleUrls: ['./raid-item.component.css']
})
export class RaidItemComponent implements OnInit {

  @Input() raid: Raid;

  constructor() { }

  ngOnInit() {
  }

}
