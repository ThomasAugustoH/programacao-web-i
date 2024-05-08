import { Component } from '@angular/core';
import { Pessoa } from '../../model/pessoa';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-app-cadastro',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app-cadastro.component.html',
  styleUrl: './app-cadastro.component.css',
})
export class AppCadastroComponent {
  vPessoa: Pessoa = {
    nome: 'Thomas',
    departamento: 'TAH',
  };

  vetPessoas: Pessoa[] = [
    {
      nome: 'Pedro',
      departamento: 'DM',
    },
    {
      nome: 'Ana',
      departamento: 'US',
    },
  ];

  vNumero: number = 0;

  mostraTamanho(pString: string) {
    alert("O tamanho da variável é de " + pString.length + " caracteres");
  }
}
