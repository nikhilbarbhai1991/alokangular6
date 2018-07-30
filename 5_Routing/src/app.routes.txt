import { Routes } from "@angular/router";
import { HomeComponent } from "./HomeComponent/home.component";
import { ListComponent } from "./ListComponent/list.component";
import { QuoteComponent } from "./QuoteComponent/quote.component";
import { ProductsComponent } from "./Products/products.component";
import { NSComponent } from "./Products/ns.component";
import { PDComponent } from "./Products/pd.component";

export const routes: Routes = [
    { path: 'list', component: ListComponent },
    { path: 'quote', component: QuoteComponent },
    {
        path: 'products',
        component: ProductsComponent,
        children: [
            { path: '', component: NSComponent },
            { path: ':id', component: PDComponent }
        ]
    },
    { path: 'lazy', loadChildren: './LazyModule/app.lazymodule#LazyModule' },
    { path: '**', component: HomeComponent }
];