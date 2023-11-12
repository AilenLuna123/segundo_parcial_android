import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Keith Ailen Luna Arias
//2021-0471

@Component({
  selector: 'app-maximo',
  templateUrl: './maximo.page.html',
  styleUrls: ['./maximo.page.scss'],
})
export class MaximoPage implements OnInit {

  constructor(private router: Router) { }

  num1: number = 0;
  num2: number = 0;
  result: any;

  maximo(){
    this.result = "El número mayor es: " + Math.max(this.num1, this.num2);

  }


  anterior(){
    this.router.navigate(['/tabla-de-multiplicar']);
  }

  ngOnInit() {
  }

}
