import { Component, OnInit } from '@angular/core';
import { doacaoService } from '../doacaoService.service';
import { Doacao } from '../modelos';
import { SelectItem, MessageService, MenuItem } from 'primeng/api';
import { ServicosService } from 'src/app/servicos.service';
import { Usuario } from 'src/app/model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-doacao-pesquisa',
  templateUrl: './doacao-pesquisa.component.html',
  styleUrls: ['./doacao-pesquisa.component.css']
})
export class DoacaoPesquisaComponent implements OnInit{

  doacoes : Doacao[];
  categorias : SelectItem[];
  sortOrder: number;
  sortField:String;
  displayDialog: boolean = false;

  senha:string;
  logado:Usuario=null;

  items: MenuItem[];

  constructor(  private service: doacaoService,
    private messageService: MessageService,
    private service2:ServicosService,
    private rotaprogramatica:Router) { }

  ngOnInit() {
      this.service.pesquisarDoacoes() .then((dados)=>{   this.doacoes=dados  });



      this.logado = this.service2.Usuariologado();

      this.categorias = [
        {label: 'Categoria ', value: 'categoria'},
        {label: 'Nome', value: 'nome'}
    ];

    this.items = [{
      label: this.logado.nomeCompleto,
      items: [
          {label: 'Meu Perfil', icon: 'pi pi-user' ,routerLink:"/usuario/meuperfil"},
          {label: 'Sair', icon: 'pi pi-times'}
      ]
    }];
}

onSortChange(event) {
  let value = event.value;
      this.sortOrder = 1;
      this.sortField= value;
  }

  showDialog() {
    this.displayDialog = true;
}

login(){
  this.service2.autenticar(this.senha);

  this.logado=this.service2.Usuariologado();

}


}


