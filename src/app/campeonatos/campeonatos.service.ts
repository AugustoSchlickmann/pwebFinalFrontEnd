import {Campeonato } from './model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CampeonatosService {

  campeonatosURL = 'http://localhost:8080/campeonatos';


  constructor(private http: HttpClient) { }



  pesquisar(): Promise<any> {
    return this.http.get<any>(this.campeonatosURL).toPromise();
  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.campeonatosURL+'/'+id)
    .toPromise()
    .then(() => null);
  }

  adicionar(campeonato: Campeonato): Promise<any>{
    return this.http.post(this.campeonatosURL, campeonato)
    .toPromise();
  }

  alterar(campeonato: Campeonato): Promise<any>{
    return this.http.put(this.campeonatosURL+'/'+campeonato.id, campeonato)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Campeonato> {
    return this.http.get<Campeonato>(this.campeonatosURL+'/'+codigo).toPromise();
  }




}
