import { AppCadastro2Component } from './view/app-cadastro2/app-cadastro2.component';
import { Routes } from '@angular/router';
import { AppHomeComponent } from './view/app-home/app-home.component';
import { AppCadastroComponent } from './view/app-cadastro/app-cadastro.component';
import { AppCadastro3Component } from './view/app-cadastro3/app-cadastro3.component';

export const routes: Routes = [
  {
    path: '',
    component: AppHomeComponent,
  },
  {
    path: 'cadastro',
    component: AppCadastroComponent,
  },
  {
    path: 'cadastro2',
    component: AppCadastro2Component,
  },
  {
    path: 'cadastro3',
    component: AppCadastro3Component
  }
];
