import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model';
import { ServicosService } from 'src/app/servicos.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-outrem-perfil',
  templateUrl: './outrem-perfil.component.html',
  styleUrls: ['./outrem-perfil.component.css']
})
export class OutremPerfilComponent implements OnInit {

  outrem = new Usuario();


  constructor(private service: ServicosService,
    private messageService: MessageService,
    private rota: ActivatedRoute,
    private rotaprogramatica:Router) { }

  ngOnInit() {
    const codigoUsuario = this.rota.snapshot.params['id'];
    if(codigoUsuario){
      this.carregarUsuario(codigoUsuario);
    }
  }

  carregarUsuario(id:number){
    this.service.buscarUsuarioPorCodigo(id) .then((data) => {this.outrem = data;});
    this.service.buscarDoacoesFeitas(id).then((feitas) => {this.outrem.feitas=feitas});
    this.service.buscarDoacoesRecebidas(id).then((recebidas) => {this.outrem.recebidas=recebidas});

  }

}
