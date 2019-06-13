import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisaogeralService {

  constructor(
    private http: HttpClient
  ) { }

  listarCampeonato(): Promise<any> {
    return this.http.get<any>('http://localhost:8080/campeonatos').toPromise();
  }

  listarPartidasDoCampeonato(id:number): Promise<any> {
    return this.http.get<any>('http://localhost:8080/campeonatos/'+id+'/partidas').toPromise();
  }




}
