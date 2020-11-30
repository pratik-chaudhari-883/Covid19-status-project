import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import {HttpClientModule} from '@angular/common/http';
import { CountryComponent } from './country/country.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CountryComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
 
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
