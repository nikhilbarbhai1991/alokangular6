import { Component, OnInit, OnDestroy } from '@angular/core';
import { Author } from '../Models/app.author';
import { DataService } from '../Services/data.service';
import { Subscription } from '../../node_modules/rxjs';

@Component({
    selector: 'quote',
    templateUrl: 'quote.component.html',
    styleUrls: ['./quote.component.css'.toString()]
})

export class QuoteComponent implements OnInit, OnDestroy {
    selectedAuthor: Author;

    constructor(private dService: DataService) {
        console.log("Ctor - Quote Component");
    }

    ngOnInit() {
        console.log("OnInit - Quote Component");
        this.selectedAuthor = this.dService.SAuthor;
    }

    ngOnDestroy(): void {
        console.log("Destroy - Quote Component");
    }
}