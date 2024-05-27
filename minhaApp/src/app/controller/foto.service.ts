import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Foto } from '../model/foto';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  constructor(private vHttp: HttpClient) { }

  findAll():Observable<Foto[]>{
    return this.vHttp.get<Foto[]>("https://jsonplaceholder.typicode.com/photos");
  }

  findById(pFotoId: number):Observable<Foto> {
    return this.vHttp.get<Foto>("https://jsonplaceholder.typicode.com/photos/" + pFotoId);
  }

  findByAlbum(pAlbumId: number): Observable<Foto[]> {
    return this.vHttp.get<Foto[]>('https://jsonplaceholder.typicode.com/albums/'+pAlbumId+'/photos');
  }

  insFoto(pFoto: Foto):Observable<Foto> {
    return this.vHttp.post<Foto>("https://jsonplaceholder.typicode.com/photos", pFoto);
  }

  updFoto(pFoto: Foto):Observable<Foto> {
    return this.vHttp.put<Foto>("https://jsonplaceholder.typicode.com/photos/" + pFoto.id, pFoto);
  }

  delFoto(pFotoId: number):Observable<void> {
    return this.vHttp.delete<void>("https://jsonplaceholder.typicode.com/photos/" + pFotoId);
  }
}
