import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css',
})
export class BoardComponent {
  palavraCorreta: string[] = ['M', 'E', 'S', 'M', 'A'];
  linhaAtual: number = 0;
  linhas: string[][] = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
  ];
  numLinhasIniciais: number = 6;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  enviarPalavra(): void {
    var linha = document.getElementsByClassName('ativa')[0];
    var celulas = linha.getElementsByClassName('ativa');
    var palavraAdivinhada: string[] = [];

    for (let i = 0; i < celulas.length; i++) {
      const input = celulas[i] as HTMLInputElement;
      palavraAdivinhada.push(input.value);
    }

    if (palavraAdivinhada.every((letter) => letter !== '')) {
      for (let i = 0; i < celulas.length; i++) {
        const input = celulas[i] as HTMLInputElement;
        input.disabled = true;
      }
      this.verificarPalavra(palavraAdivinhada);
    } else {
      alert('Preencha todos os campos');
    }
  }

  verificarPalavra(palavraAdivinhada: string[]): void {
    var linha = document.getElementsByClassName('ativa')[0];
    var celulas = linha.getElementsByClassName('ativa');
    var qtCorretas: number = 0;
    var palavraVerifica: string[] = this.palavraCorreta.slice();

    for (let i = 0; i < celulas.length; i++) {
      const input = celulas[i] as HTMLInputElement;
      if (palavraAdivinhada[i] === palavraVerifica[i]) {
        input.classList.add('posCorreta');
        palavraVerifica[i] = '';
        qtCorretas++;
      }
    }

    for (let i = 0; i < celulas.length; i++) {
      const input = celulas[i] as HTMLInputElement;
      for (let j = 0; j < celulas.length; j++) {
        if (
          palavraAdivinhada[i] === palavraVerifica[j] &&
          !input.classList.contains('posCorreta') &&
          !input.classList.contains('posCorreta')
        ) {
          input.classList.add('posIncorreta');
          palavraVerifica[j] = '';
        }
      }
      if (
        !input.classList.contains('posCorreta') &&
        !input.classList.contains('posIncorreta')
      ) {
        input.classList.add('incorreta');
      }
    }

    linha.classList.remove('ativa');
    if (qtCorretas == 5) {
      setTimeout(() => {
        alert('Você venceu!! 🎉');
    }, 1);
    } else {
      this.proximaLinha(linha);
    }
  }

  proximaLinha(linhaFeita: Element): void {
    this.linhaAtual++;
    if (this.linhaAtual >= this.numLinhasIniciais) {
      this.adicionarLinha();
    }
    var celulasFeitas = linhaFeita.getElementsByClassName('ativa');

    for (let i = 0; i < 5; i++) {
      const input = celulasFeitas[0] as HTMLInputElement;
      input.classList.remove('ativa');
    }

    var linha = document.getElementsByClassName('linha')[this.linhaAtual];
    linha.classList.add('ativa');
    var celulas = linha.getElementsByClassName('celula');

    for (let i = 0; i < celulas.length; i++) {
      const input = celulas[i] as HTMLInputElement;
      input.classList.add('ativa');
      input.disabled = false;
    }
  }

  adicionarLinha(): void {
    const novaLinha: string[] = [];
    for (let i = 0; i < this.palavraCorreta.length; i++) {
      novaLinha.push('');
    }
    this.linhas.push(novaLinha);

    const linha = this.renderer.createElement('div');
    this.renderer.addClass(linha, 'linha');
    this.renderer.addClass(linha, 'ativa');

    for (let i = 0; i < this.palavraCorreta.length; i++) {
      const input = this.renderer.createElement('input');
      this.renderer.addClass(input, 'celula');
      this.renderer.addClass(input, 'ativa');
      this.renderer.setAttribute(input, 'type', 'text');
      this.renderer.setAttribute(input, 'maxlength', '1');
      this.renderer.listen(input, 'keyup', (event) => {
        if (event.key === 'Enter' || event.code === 'Enter') {
          this.enviarPalavra();
        }
      });
      this.renderer.appendChild(linha, input);
    }

    this.renderer.appendChild(
      this.elementRef.nativeElement.querySelector('.quadro'),
      linha
    );

    this.ngOnInit();
  }

  adicionarLinhaInativa(): void {
    const novaLinha: string[] = [];
    for (let i = 0; i < this.palavraCorreta.length; i++) {
      novaLinha.push('');
    }
    this.linhas.push(novaLinha);

    const linha = this.renderer.createElement('div');
    this.renderer.addClass(linha, 'linha');

    for (let i = 0; i < this.palavraCorreta.length; i++) {
      const input = this.renderer.createElement('input');
      this.renderer.addClass(input, 'celula');
      this.renderer.setAttribute(input, 'type', 'text');
      this.renderer.setAttribute(input, 'maxlength', '1');
      this.renderer.setAttribute(input, 'disabled', 'true');
      this.renderer.listen(input, 'keyup', (event) => {
        if (event.key === 'Enter' || event.code === 'Enter') {
          this.enviarPalavra();
        }
      });
      this.renderer.appendChild(linha, input);
    }

    this.renderer.appendChild(
      this.elementRef.nativeElement.querySelector('.quadro'),
      linha
    );

    this.ngOnInit();
  }

  reiniciar(): void {
    this.linhaAtual = 0;
    this.linhas = [
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
    ];

    const quadro = this.elementRef.nativeElement.querySelector('.quadro');
    quadro.innerHTML = '';

    this.adicionarLinha();

    for (let i = 0; i < this.numLinhasIniciais - 1; i++) {
      this.adicionarLinhaInativa();
    }
  }

  ngOnInit(): void {
    const inputs = document.querySelectorAll(
      '.celula'
    ) as NodeListOf<HTMLInputElement>;
    inputs.forEach((input) => {
      input.addEventListener('input', function () {
        this.value = this.value.toUpperCase();
      });
    });
  }
}
