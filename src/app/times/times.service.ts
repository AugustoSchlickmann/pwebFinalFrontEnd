import {Time } from './model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimesService {

  timesURL = 'http://localhost:8080/times';
  urlFiltro;

  constructor(private http: HttpClient) { }



  pesquisar(): Promise<any> {
    return this.http.get<any>(this.timesURL).toPromise();
  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.timesURL+'/'+id)
    .toPromise()
    .then(() => null);
  }

  adicionar(time: Time): Promise<any>{
    return this.http.post(this.timesURL, time)
    .toPromise();
  }

  alterar(time: Time): Promise<any>{
    return this.http.put(this.timesURL+'/'+time.id, time)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Time> {
    return this.http.get<Time>(this.timesURL+'/'+codigo).toPromise();
  }




}
