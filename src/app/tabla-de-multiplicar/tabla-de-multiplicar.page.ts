import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Keith Ailen Luna Arias
//2021-0471

@Component({
  selector: 'app-tabla-de-multiplicar',
  templateUrl: './tabla-de-multiplicar.page.html',
  styleUrls: ['./tabla-de-multiplicar.page.scss'],
})
export class TablaDeMultiplicarPage implements OnInit {

  constructor(private router: Router) { }

  numero: number=0;

  rango: number[] = [];



  tabla(){
    this.rango = [];

    for(let i=1;i<= 14; i++){
      this.rango.push(i);
    }
  }


  siguiente(){
    this.router.navigate(['/maximo']);
  }
  anterior(){
    this.router.navigate(['/home']);
  }
  ngOnInit() {
  }

}
