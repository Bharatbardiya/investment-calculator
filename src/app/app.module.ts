import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InvestmentResultsModule } from './investment-results/investment-results.module';
import { UserInputModule } from './user-input/user-input.module';



@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    CommonModule,
    InvestmentResultsModule,
    UserInputModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
