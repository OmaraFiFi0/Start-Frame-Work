import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import path from 'path';
import { AboutComponent } from './about/about.component';
import { ProtfolioComponent } from './protfolio/protfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path:"" , redirectTo:"home",pathMatch:"full"},
    {path:'home', component:HomeComponent , title:"Home Page" },
    {path:"about", component:AboutComponent,title:"About Page"},
    {path:"protfolio" , component:ProtfolioComponent , title:"Protfolio Page"},
    {path:"contact" , component:ContactComponent ,title:"Contact Page" },
    {path:"**",component:NotFoundComponent , title:"Error 404"}
];
