import { Jogador } from './model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JogadoresService {

  jogadoresURL = 'http://localhost:8080/jogadores';


  constructor(
    private http: HttpClient
  ) { }


  pesquisar(): Promise<any> {
    return this.http.get<any>(this.jogadoresURL).toPromise();
  }

  listarTime(): Promise<any> {
    return this.http.get<any>('http://localhost:8080/times').toPromise();
  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.jogadoresURL+'/'+id)
    .toPromise()
    .then(() => null);
  }

  adicionar(jogador: Jogador): Promise<any>{
    return this.http.post(this.jogadoresURL, jogador)
    .toPromise();
  }

  alterar(jogador: Jogador): Promise<any>{
    return this.http.put(this.jogadoresURL+'/'+jogador.id, jogador)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Jogador> {
    return this.http.get<Jogador>(this.jogadoresURL+'/'+codigo).toPromise();
  }




}
