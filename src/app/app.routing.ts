import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import { HomeComponent } from './home/home.component';
import { CalcComponent } from './calc/calc.component';



const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: HomeComponent },
    { path: 'calc',             component: CalcComponent },
    //{ path: 'user-profile',     component: ProfileComponent },
    //{ path: 'signup',           component: SignupComponent },
    //{ path: 'landing',          component: LandingComponent },
    
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
