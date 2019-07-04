import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
// 'Input' dato que viene desde afuera de esta clase, se pasa por el selector.
// 'Output' Emite una salida
// 'EventEmitter' emisión de información a partir de un evento

@Component({
    selector: 'app-heroe-tarjeta',
    templateUrl: './heroe-tarjeta.component.html',
    styleUrls: ['./heroe-tarjeta.component.sass']
})
export class HeroeTarjetaComponent implements OnInit {
    @Input() heroe: any = {};
    @Input() index: number;

    @Output() heroeSeleccionado: EventEmitter<number>;

    constructor(private router: Router) {
        this.heroeSeleccionado = new EventEmitter();
    }

    ngOnInit() {}

    verHeroe(i: number) {
        this.router.navigate(['/heroe', i]);
    }
}
