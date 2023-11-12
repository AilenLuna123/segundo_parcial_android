import { Component } from '@angular/core';
import { Router } from '@angular/router';

//Keith Ailen Luna Arias
//2021-0471

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  siguiente(){
    this.router.navigate(['../tabla-de-multiplicar']);
  }

}
