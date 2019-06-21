import { Gols } from './model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Partida } from '../partidas/model';

@Injectable({
  providedIn: 'root'
})
export class GolsService {

  golsURL = 'http://localhost:8080/gols';


  constructor(
    private http: HttpClient
  ) { }


  pesquisar(): Promise<any> {
    return this.http.get<any>(this.golsURL).toPromise();
  }

  listarCampeonato(): Promise<any> {
    return this.http.get<any>('http://localhost:8080/campeonatos').toPromise();
  }

  listarPartidaCampeonato(id:number): Promise<any> {
    return this.http.get<any>('http://localhost:8080/campeonatos/'+id+'/partidas').toPromise();
  }

  listarJogadoresTime(id:number){
    return this.http.get<any>('http://localhost:8080/times/'+id+'/jogadores').toPromise();
  }

  listarGolsDaPartida(id:number){
    return this.http.get<any>('http://localhost:8080/partidas/'+id+'/gols').toPromise();
  }



  excluir(id:number):Promise<void>{
    return this.http.delete(this.golsURL+'/'+id)
    .toPromise()
    .then(() => null);
  }

  adicionar(gols: Gols): Promise<any>{
    return this.http.post(this.golsURL, gols)
    .toPromise();
  }

  alterar(gols: Gols): Promise<any>{
    return this.http.put(this.golsURL+'/'+gols.id, gols)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Gols> {
    return this.http.get<Gols>(this.golsURL+'/'+codigo).toPromise();
  }

  alterarPlacar(partida: Partida): Promise<any>{
    return this.http.put('http://localhost:8080/partidas/'+partida.id, partida)
    .toPromise();
  }


}
