import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// ↑↑ ActivatedRoute -> Provee información sobre parametros que se envían en la ruta
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  heroes: any = {};
  termino:string;

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService
              ) { 
    this.activatedRoute.params.subscribe(params => {
      this.termino = params.id;
      this.heroes = this._heroesService.buscarHeroes(params.id);
    });
  }

  ngOnInit() {
  }

}
