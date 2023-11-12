import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tabla-de-multiplicar',
    loadChildren: () => import('./tabla-de-multiplicar/tabla-de-multiplicar.module').then( m => m.TablaDeMultiplicarPageModule)
  },
  {
    path: 'maximo',
    loadChildren: () => import('./maximo/maximo.module').then( m => m.MaximoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
