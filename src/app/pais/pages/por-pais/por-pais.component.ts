import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',

  templateUrl: './por-pais.component.html',
  styleUrl: './por-pais.component.css'
})
export class PorPaisComponent {

  termino = '';
  hayError: boolean = false;
  paises: Pais[] = [];
  paisesSugeridos: Pais[] = [];
  mostrarSugerencias: boolean = false;



  constructor(private pasiService: PaisService) { }


  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;


    this.pasiService.buscarPais(this.termino).subscribe(paises => {
      console.log(paises);
      this.paises = paises;

    }, (err) => {
      this.hayError = true;
      this.paises = []
    });
  }

  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.pasiService.buscarPais(termino).subscribe(paises => this.paisesSugeridos = paises.splice(0, 5),
      (err) => this.paisesSugeridos = []
    );
  }
  buscarSugerido(termino: string) {
    this.buscar(termino);
    this.mostrarSugerencias = true;
  }

}
