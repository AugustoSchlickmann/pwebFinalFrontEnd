import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario} from './model';


@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  constructor(private http: HttpClient) { }

  usuarioURL = 'http://localhost:8090/usuarios';


  cadastrarUsuario(usuario: Usuario ): Promise<any>{
    return this.http.post(this.usuarioURL, usuario)
    .toPromise();
  }

 editarUsuario(usuario: Usuario): Promise<any>{
    return this.http.put(this.usuarioURL+'/'+usuario.idUsuario, usuario)
    .toPromise();
  }

  buscarUsuarios(): Promise<any> {
    return this.http.get<any>(this.usuarioURL).toPromise();
  }


  buscarUsuarioPorCodigo(codigo: number): Promise<Usuario> {
    return this.http.get<Usuario>(this.usuarioURL+'/'+codigo).toPromise();
  }

  buscarDoacoesFeitas(id:number):Promise<any>{
    return this.http.get<any>(this.usuarioURL+'/'+id+'/doacoesfeitas').toPromise();
  }

  buscarDoacoesRecebidas(id:number):Promise<any>{
    return this.http.get<any>(this.usuarioURL+'/'+id+'/doacoesrecebidas').toPromise();
  }


}
