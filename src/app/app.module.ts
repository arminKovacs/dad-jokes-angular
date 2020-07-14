import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JokeComponent } from './joke/joke.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [AppComponent, HomeComponent, JokeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
