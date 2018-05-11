import { Component, OnInit } from '@angular/core';
import { Raid } from './shared/model/raid';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'raid-list',
  templateUrl: './raid-list.component.html',
  styleUrls: ['./raid-list.component.css']
})
export class RaidListComponent implements OnInit {

  raidList: Raid[] = [
    {
      gym: 'Palomar',
      boss: 'Regice',
      participants: 3
    },
    {
      gym: 'Begni',
      boss: 'Regirock',
      participants: 20
    },
    {
      gym: 'Café Tokio',
      boss: 'Registeel',
      participants: 7
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
