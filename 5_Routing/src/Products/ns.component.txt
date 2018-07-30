import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ns',
    template: `
        <div class="outerdiv">
            <div class="innerdiv">
                <h3>Please select a product</h3>
            </div>
        </div>
    `
})

export class NSComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}