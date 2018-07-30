import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms'

import { RootComponent } from "./app.component";
import { ListComponent } from './ListComponent/list.component';
import { QuoteComponent } from './QuoteComponent/quote.component';
import { RouterModule } from '../node_modules/@angular/router';

import {routes} from './app.routes';
import { HomeComponent } from './HomeComponent/home.component';
import { ProductsComponent } from './Products/products.component';
import { NSComponent } from './Products/ns.component';
import { PDComponent } from './Products/pd.component';

@NgModule({
    imports: [BrowserModule, FormsModule, 
        RouterModule.forRoot(routes)],
    declarations: [RootComponent, ListComponent, QuoteComponent, HomeComponent, ProductsComponent, NSComponent, PDComponent],
    bootstrap: [RootComponent]
})
export class AppModule { }