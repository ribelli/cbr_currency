import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { BoardRowComponent } from './components/board/board-row.component';

import { CurrencySymbolPipe } from './pipes/currency-symbol.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    BoardRowComponent,
    CurrencySymbolPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  exports: [
    AppComponent,
    CurrencySymbolPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
