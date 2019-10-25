import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario, Endereco } from './model';


@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  constructor(private http: HttpClient) { }

  usuarioURL = 'http://localhost:8090/usuarios';
  enderecoURL = 'http://localhost:8090/enderecos'


  cadastrarUsuario(usuario: Usuario ): Promise<any>{
    this.cadastrarEndereco(usuario.endereco);
    return this.http.post(this.usuarioURL, usuario)
    .toPromise();
  }

  editarEndereco(endereco:Endereco): Promise<any>{
    return this.http.put(this.enderecoURL+'/'+endereco.id, endereco)
    .toPromise();
  }

  cadastrarEndereco(endereco:Endereco): Promise<any>{
    return this.http.post(this.enderecoURL, endereco)
    .toPromise();
  }

  editarUsuario(usuario: Usuario): Promise<any>{
    return this.http.put(this.usuarioURL+'/'+usuario.id, usuario)
    .toPromise();
  }

  buscarUsuarioPorCodigo(codigo: number): Promise<Usuario> {
    return this.http.get<Usuario>(this.usuarioURL+'/'+codigo).toPromise();
  }


}
