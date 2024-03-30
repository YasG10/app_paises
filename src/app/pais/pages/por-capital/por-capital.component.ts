import { Component, Input } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrl: './por-capital.component.css'
})
export class PorCapitalComponent {

  hayError: boolean = false;

  termino: string = '';

  capitales: Pais[] = [];


  constructor(private paisServices: PaisService) { }


  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.paisServices.buscarCapital(this.termino).subscribe(capital => {
      console.log(capital);
      this.capitales = capital;
    }, (err) => {
      this.hayError = true;
      this.capitales = [];
    });
  }

  

}
