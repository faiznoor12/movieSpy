import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './components/nav/nav.component';
import { SideComponent } from './components/side/side.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { TrendmoveComponent } from './components/trendmove/trendmove.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './components/home/home.component';
import { MovieDetialsComponent } from './components/movie-detials/movie-detials.component';
import { SafePipe } from './safe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SideComponent,
    TrendmoveComponent,
    HomeComponent,
    MovieDetialsComponent,
    SafePipe

  ],
  imports: [

  BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
