import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {

  constructor(
    public dataS: DataService
  ) { }

  ngOnInit(): void {
  }

  go(dir: number): void {
    this.dataS.changeMonth(dir);
  }

}
