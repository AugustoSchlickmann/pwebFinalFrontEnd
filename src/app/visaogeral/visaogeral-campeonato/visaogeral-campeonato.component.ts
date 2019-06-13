import { VisaogeralService } from './../visaogeral.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-visaogeral-campeonato',
  templateUrl: './visaogeral-campeonato.component.html',
  styleUrls: ['./visaogeral-campeonato.component.css']
})
export class VisaogeralCampeonatoComponent implements OnInit {

  partidas=[];
  campeonatos = [];
  placares=[];

  constructor(
    private service: VisaogeralService,
    private messageService: MessageService,
    private rota: ActivatedRoute
  ) { }

  ngOnInit() {
    this.pesquisarCampeonatos();
  }

  pesquisarPartidas(id_campeonato:number){

    this.service.listarPartidasDoCampeonato(id_campeonato)
    .then((dados)=>{
      this.partidas=dados
    });
  }

  pesquisarCampeonatos(){
    this.service.listarCampeonato()
    .then((dados)=>{
      this.campeonatos=dados
      .map(c => ({ label: c.nome, value: c }));
    });
  }


}
