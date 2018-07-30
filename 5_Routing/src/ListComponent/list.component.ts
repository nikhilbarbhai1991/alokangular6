import { Component, OnDestroy } from '@angular/core';
import { Author } from '../Models/app.author';
import { DataService } from '../Services/data.service';

@Component({
    selector: 'list',
    templateUrl: 'list.component.html',
    styles: [require('./list.component.css').toString()]
})
export class ListComponent implements OnDestroy {
    
    list: Array<Author>;
    selectedAuthor: Author;

    constructor(private dService: DataService) { 
        console.log("Ctor - List Component");
    }

    ngOnInit() {
        console.log("OnInit - List Component");
        this.list = this.dService.Authors;
    }

    selectAuthor(a: Author) {
        this.dService.SAuthor = a;
        this.selectedAuthor = a;
    }

    isSelected(a: Author) {
        return this.selectedAuthor === a;
    }

    ngOnDestroy(): void {
       console.log("Destroy - List Component");
    }
}