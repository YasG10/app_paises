import { Component, Input } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais-tabla',  
  templateUrl: './pais-tabla.component.html'
  
})
export class PaisTablaComponent {

  @Input() paises: Pais[] = [];


  
  

  

}
