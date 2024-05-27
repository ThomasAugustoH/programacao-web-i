import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from '../model/album';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private vHttp: HttpClient) { }

  findAlbumById(pAlbumId: number): Observable<Album> {
    return this.vHttp.get<Album>('https://jsonplaceholder.typicode.com/albums/'+pAlbumId);
  }
}
