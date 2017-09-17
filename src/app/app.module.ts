import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { SportproductComponent } from '../app/feature/login/login.component';
import { CurrencyformaterPipe } from './shared/currencyformater.pipe';
import { Routes, RouterModule } from '@angular/router'
import { appRoutes } from "./app.route";
import { HomeComponent } from './feature/home/home.component';
import { ProductlistComponent } from './feature/productlist/productlist.component';
import { MassuploadComponent } from './feature/massupload/massupload.component';


@NgModule({
  declarations: [
    AppComponent,
    SportproductComponent,
    CurrencyformaterPipe,
    HomeComponent,
    ProductlistComponent,
    MassuploadComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

