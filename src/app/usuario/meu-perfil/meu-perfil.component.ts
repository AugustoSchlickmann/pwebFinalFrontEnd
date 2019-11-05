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
  private messageService: MessageService,
  private rotaprogramatica:Router,
  private conf: ConfirmationService,
  private serviceDoacao:doacaoService) { }

  ngOnInit() {
  this.eu = this.service.Usuariologado();
  this.service.buscarDoacoesFeitas(this.eu.idUsuario).then((feitas)=>{this.eu.feitas=feitas});
  this.service.buscarDoacoesRecebidas(this.eu.idUsuario).then((recebidas)=>{ this.eu.recebidas=recebidas});
  }

  logoff(){
    this.service.deslogar();
    this.rotaprogramatica.navigate(['/doacoes']);
  }

  confirmarExclusao(doacao:Doacao){
    this.conf.confirm({
      message: 'Tem certeza que deseja excluir '+doacao.nome+'?',
      accept: () => {
        this.excluir(doacao);
      }
    });
  }

  excluir(doacao: Doacao){
    this.serviceDoacao.excluirDoacao(doacao.id)
    .then(()=>{
      this.service.buscarDoacoesFeitas(this.eu.idUsuario).then((feitas)=>{this.eu.feitas=feitas});
      this.messageService.add({severity:'success', summary:'Exclusão', detail:'Doação '+doacao.nome+' excluída'});
    });
  }

}
