import { Partida } from './model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartidasService {

  partidasURL = 'http://localhost:8080/partidas';


  constructor(
    private http: HttpClient
  ) { }


  pesquisar(): Promise<any> {
    return this.http.get<any>(this.partidasURL).toPromise();
  }

  listarTime(): Promise<any> {
    return this.http.get<any>('http://localhost:8080/times').toPromise();
  }

  listarCampeonato(): Promise<any> {
    return this.http.get<any>('http://localhost:8080/campeonatos').toPromise();
  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.partidasURL+'/'+id)
    .toPromise()
    .then(() => null);
  }

  adicionar(partida: Partida): Promise<any>{
    return this.http.post(this.partidasURL, partida)
    .toPromise();
  }

  alterar(partida: Partida): Promise<any>{
    return this.http.put(this.partidasURL+'/'+partida.id, partida)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Partida> {
    return this.http.get<Partida>(this.partidasURL+'/'+codigo).toPromise();
  }




}
