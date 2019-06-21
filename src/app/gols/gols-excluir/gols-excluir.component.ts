import { Jogador } from './../../jogadores/model';
import { ActivatedRoute } from '@angular/router';
import { GolsService } from './../gols.service';
import { Gols } from './../model';
import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Partida } from 'src/app/partidas/model';

@Component({
  selector: 'app-gols-excluir',
  templateUrl: './gols-excluir.component.html',
  styleUrls: ['./gols-excluir.component.css']
})
export class GolsExcluirComponent implements OnInit {

  golsDaPartida=[];
  partidas=[];
  campeonatos = [];
  golsTime1:number=0;
  golsTime2:number=0;

  constructor(
    private service: GolsService,
    private messageService: MessageService,
    private rota: ActivatedRoute,
    private conf: ConfirmationService

  ) { }

  ngOnInit() {
    this.pesquisarCampeonatos();
  }

  listarGols(partida: Partida){
    this.service.listarGolsDaPartida(partida.id)
    .then((dados)=>{
      this.golsDaPartida=dados
    });

    this.atualizaPlacar(partida);

  }

  excluir(gol: Gols, partida:Partida){

    if(gol.jogador.time.id==partida.time1.id){
      this.golsTime1--;
    }
    if(gol.jogador.time.id==partida.time2.id){
      this.golsTime2--  ;
    }

    partida.placar=this.golsTime1+' X '+this.golsTime2;
    this.service.alterarPlacar(partida);

    this.service.excluir(gol.id)
    .then(()=>{
      this.listarGols(partida);
      this.messageService.add({severity:'success', detail:'Gol Excluído'});
    });
  }

  atualizaPlacar(partida:Partida){
    this.golsTime1=0;
    this.golsTime2=0;


    if(partida.placar.endsWith('Definir')){
    }else{
      var c = partida.placar.split('X');
      this.golsTime1=parseInt(c[0])
      this.golsTime2=parseInt(c[1])
    }

  }

  confirmarExclusao(gol:Gols, partida:Partida){
   this.conf.confirm({
      message: 'Tem certeza que deseja excluir o gol de '+gol.jogador.nome+'?',
      accept: () => {
        this.excluir(gol, partida);
      }
    });
  }



  pesquisarPartidas(id_campeonato:number){

    this.service.listarPartidaCampeonato(id_campeonato)
    .then((dados)=>{
      this.partidas=dados
      .map(p => ({ label: p.time1.nome+' X ' +p.time2.nome, value: p}));
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
