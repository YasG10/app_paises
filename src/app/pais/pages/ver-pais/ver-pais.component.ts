import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs';
import { Pais, Translation } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrl: './ver-pais.component.css'
})
export class VerPaisComponent implements OnInit {

  pais!: Pais;





  constructor(private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }


  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.paisService.getPaisPorAlpha(id)),
        tap(console.log)
      )
      .subscribe((paises: Pais[]) => {
        [this.pais] = paises;
        console.log(this.pais)
      });


  }

  //   this.activatedRoute.params.subscribe(({ id }) => {
  //     console.log(id);
  //     this.paisService.getPaisPorAlpha(id).subscribe(pais => {
  //       console.log(pais);
  //     });

  //   });
  // }

}
