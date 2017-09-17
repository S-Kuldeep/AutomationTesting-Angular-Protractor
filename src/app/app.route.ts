import { Routes } from "@angular/router";
import { SportproductComponent } from "./feature/login/login.component";
import { HomeComponent } from "./feature/home/home.component";
import { ProductlistComponent } from "./feature/productlist/productlist.component";
import { MassuploadComponent } from "./feature/massupload/massupload.component";

export const appRoutes: Routes = [
    {path:'',component:SportproductComponent},
    {path:'home',component:HomeComponent},
    {path:'product',component:ProductlistComponent},
    {path:'massimport',component:MassuploadComponent},
    {path:'**',component:SportproductComponent},
  ]