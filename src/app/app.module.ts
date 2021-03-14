import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {StoreModule} from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {ProductsModule} from './products/products.module';

import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';

import { DropdownModule } from '../../node_modules/primeng-lts/dropdown';
import {MenubarModule} from 'primeng-lts/menubar';
import {MainMenuModule} from './shared/modules/mainMenu/mainMenu.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ProductsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    DropdownModule,
    HttpClientModule,
    MenubarModule,
    MainMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
