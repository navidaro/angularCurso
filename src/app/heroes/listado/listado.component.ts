import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Superman', 'Spiderman', 'Ironman', 'Hulk', 'Tor'];
  heroeBorrado: string = "";

  constructor() {
    console.log('constructor');
   }

  ngOnInit(): void {
    console.log('onInit');
  }

  borrarHeroe(){
    console.log('Borrando Heroe');
    this.heroeBorrado = this.heroes.pop() || "No existen mas";
  }

}
