import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'fs-main-menu',
  templateUrl: './mainMenu.component.html',
  styleUrls: ['./mainMenu.component.scss']
})
export class MainMenuComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void{
    this.items = [];
  }

}
