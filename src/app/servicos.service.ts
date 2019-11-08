import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario} from './model';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { reject } from 'q';


@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  constructor(private http: HttpClient,
    private messageService: MessageService,
    private rotaprogramatica:Router) { }

  usuarioURL = 'http://localhost:8090/usuarios';
  logado:Usuario;



  cadastrarUsuario(usuario: Usuario ): Promise<any>{
    return this.http.post(this.usuarioURL, usuario)
    .toPromise();
  }

 editarUsuario(usuario: Usuario): Promise<any>{
    return this.http.put(this.usuarioURL+'/'+usuario.idUsuario, usuario)
    .toPromise();
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

  login(senha:string): Promise<Usuario> {
    return this.http.get<Usuario>(this.usuarioURL+'/login/'+senha).toPromise();

  }

  autenticar(senha:string){
      this.login(senha).then((dados)=>{ this.logado=dados}) .then( ()=>{
        if(this.logado!=null){
          this.messageService.add({ severity: 'success', detail: 'Usuario ' + this.logado.nomeCompleto + ' Autenticado' });
          this.rotaprogramatica.navigate(['/usuario/meuperfil']);
        }else{
          this.messageService.add({ severity: 'error', detail: 'Dados  Inválidos' });
        }

      });
  }

  deslogar(){
    this.logado=null;
  }

   Usuariologado(){
    return this.logado;
  }


}
