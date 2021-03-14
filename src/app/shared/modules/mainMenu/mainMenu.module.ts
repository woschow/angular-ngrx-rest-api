import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './components/mainMenu.component';
import {MenubarModule} from 'primeng/menubar';

@NgModule({
  declarations: [MainMenuComponent],
  imports: [
    CommonModule,
    MenubarModule
  ],
  exports: [MainMenuComponent]
})
export class MainMenuModule { }
