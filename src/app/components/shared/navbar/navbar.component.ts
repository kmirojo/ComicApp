import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor(private _heroesService: HeroesService, private router: Router) { 

  }

  ngOnInit() {
  }

  buscarHeroe(val: string){
    this.router.navigate(['/buscador', val]);
  }

}
