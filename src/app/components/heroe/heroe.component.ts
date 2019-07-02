import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// ↑↑ ActivatedRoute -> Provee información sobre parametros que se envían en la ruta
import { HeroesService } from '../../servicios/heroes.service';

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
    styles: []
})
export class HeroeComponent implements OnInit {
    heroe: any = {};

    constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroesService) {
        this.activatedRoute.params.subscribe(params => {
            this.heroe = _heroesService.getHeroe(params.id);
            console.log(this.heroe);
        });
    }

    ngOnInit() {}
}
