import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrl: './por-region.component.css'
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];

  regionActiva: string = '';

  paises: Pais[] = [];


  constructor(private paisService: PaisService) { }

  getClaseCSS(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion(region: string) { 
    if (region === this.regionActiva) { return; }

    this.regionActiva = region;
    this.paises = [];
    this.paisService.buscarRegion(region)
      .subscribe(paises => this.paises = paises)
  }
  
}
