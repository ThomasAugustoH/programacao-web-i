import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AppHomeComponent } from './view/app-home/app-home.component';
import { AppCadastroComponent } from './view/app-cadastro/app-cadastro.component';

export const routes: Routes = [
  {
    path: '',
    component: AppHomeComponent,
  },
  {
    path: 'cadastro',
    component: AppCadastroComponent,
  }
];
