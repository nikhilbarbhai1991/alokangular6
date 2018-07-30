import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-lazy',
    template: `<h2>Lazy Loaded Component</h2>`
})

export class LazyComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}