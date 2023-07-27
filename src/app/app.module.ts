import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdLenderItemComponent } from './ad-lender-item/ad-lender-item.component';
import { EveryAdLenderComponent } from './every-ad-lender/every-ad-lender.component';
import { FormAdLenderComponent } from './form-ad-lender/form-ad-lender.component';
import { AdLenderComponent } from './ad-lender/ad-lender.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdLenderItemComponent,
    EveryAdLenderComponent,
    FormAdLenderComponent,
    AdLenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
