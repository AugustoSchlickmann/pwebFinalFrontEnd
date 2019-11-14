import { Doacao } from './../../doacao/modelos';
import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ServicosService } from 'src/app/servicos.service';
import { Usuario } from 'src/app/model';
import { Router } from '@angular/router';
import { doacaoService } from 'src/app/doacao/doacaoService.service';

@Component({
  selector: 'app-meu-perfil',
  templateUrl: './meu-perfil.component.html',
  styleUrls: ['./meu-perfil.component.css']
})
export class MeuPerfilComponent implements OnInit {

   eu:Usuario=new Usuario();


  constructor(private service:ServicosService,
  private rotaprogramatica:Router
  ) { }

  ngOnInit() {
    if(this.service.logado==null){
      this.rotaprogramatica.navigate(['/doacoes']);
    }else{
       this.eu = this.service.Usuariologado();
       this.service.buscarDoacoesFeitas(this.eu.idUsuario).then((feitas)=>{this.eu.feitas=feitas});
       this.service.buscarDoacoesRecebidas(this.eu.idUsuario).then((recebidas)=>{ this.eu.recebidas=recebidas});
    }
  }

  logoff(){
    this.service.deslogar();
    this.rotaprogramatica.navigate(['/doacoes']);
  }


}
