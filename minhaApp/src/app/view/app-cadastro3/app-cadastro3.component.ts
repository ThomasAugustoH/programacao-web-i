import { Component } from '@angular/core';
import { Album } from '../../model/album';
import { AlbumService } from '../../controller/album.service';
import { FormsModule } from '@angular/forms';
import { FotoService } from '../../controller/foto.service';
import { Foto } from '../../model/foto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-app-cadastro3',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app-cadastro3.component.html',
  styleUrl: './app-cadastro3.component.css'
})
export class AppCadastro3Component {

  constructor(private vAlbumService: AlbumService, private vFotoService: FotoService) { }

  vAlbumId: number = 0;
  vAlbum: Album = {
    id: 0,
    title: '',
    userId: 0
  };
  vetFotos: Foto[] = [];

  buscaAlbum(pAlbumId: number): void {
    this.vAlbumService.findAlbumById(pAlbumId).subscribe({
      next: (pAlbum) => {
        this.vAlbum = pAlbum;
        this.vetFotos = [];
      },
      error: () => alert('Album '+pAlbumId+' não encontrado!')
    });
  }

  buscaFotos(pAlbumId: number): void {
    this.vFotoService.findByAlbum(pAlbumId).subscribe({
      next: (pVetFotos) => this.vetFotos = pVetFotos,
      error: () => alert('Álbum '+pAlbumId+' não encontrado!')
    });
  }
}
