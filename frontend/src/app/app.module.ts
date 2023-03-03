import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
//components
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { CghistComponent } from './components/cghist/cghist.component';
//-components

import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    CghistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
