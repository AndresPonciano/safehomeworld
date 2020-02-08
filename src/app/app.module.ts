import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MapComponent } from './components/map/map.component';
import { HeaderComponent } from './components/header/header.component';
import { GoogleChartsModule, GoogleChartComponent } from 'angular-google-charts';
import { AngularFireModule } from '@angular/fire'

export const firebaseConfig = {
  apiKey: 'AIzaSyA0PFpJEZuRKxC2bd6sPszYOhl-ZkwA_rQ',
  authDomain: 'homeworld-bba9d.firebaseapp.com',
  databaseURL: 'https://homeworld-bba9d.firebaseio.com',
  projectId: 'homeworld-bba9d',
  storageBucket: 'homeworld-bba9d.appspot.com',
  messagingSenderId: '869533818756',
  appId: '1:869533818756:web:9a174e7a2518112580c7d1',
  measurementId: 'G-KPRV67G58C'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MapComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleChartsModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
