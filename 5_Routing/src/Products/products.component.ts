import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Services/products.service';

@Component({
    selector: 'products',
    templateUrl: 'products.component.html',
    styleUrls: ['./products.component.css'.toString()],
    providers: [ProductsService]
})

export class ProductsComponent implements OnInit {
    productsData: Array<any>;
    pStyles: any;

    constructor(private pService: ProductsService) { }

    ngOnInit() {
        this.productsData = this.pService.Products;
    }
}