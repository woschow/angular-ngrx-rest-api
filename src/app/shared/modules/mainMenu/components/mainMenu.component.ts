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
    /*this.items = [
      {
        label:'Categories',
        items:[
          {
            icon:'pi pi-fw pi-bars',
            label:'List',
            routerLink: ['products/categories']
          }
        ]
      },
      {
        label:'Products',
        items:[
          {
            label:'New'
          },
          {
            icon:'pi pi-fw pi-bars',
            label:'List',
            routerLink: ['products/products']
          }
        ]
      }
    ];*/
  }

}
