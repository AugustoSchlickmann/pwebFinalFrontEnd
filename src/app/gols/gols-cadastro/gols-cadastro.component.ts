
import { Jogador } from './../../jogadores/model';
import { ActivatedRoute } from '@angular/router';
import { GolsService } from './../gols.service';
import { Gols } from './../model';
import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Partida } from 'src/app/partidas/model';
import { PartidasCadastroComponent } from 'src/app/partidas/partidas-cadastro/partidas-cadastro.component';



@Component({
  selector: 'app-gols-cadastro',
  templateUrl: './gols-cadastro.component.html',
  styleUrls: ['./gols-cadastro.component.css']
})
export class GolsCadastroComponent implements OnInit {

  gol = new Gols();
  partidas=[];
  campeonatos = [];
  jogadoresTime1 = [];
  jogadoresTime2 =[];
  golsTime1:number=0;
  golsTime2:number=0;

  constructor(
    private service: GolsService,
    private messageService: MessageService,
    private conf: ConfirmationService
  ) { }

  ngOnInit() {
    this.pesquisarCampeonatos();
  }

  inserir(jogador:Jogador, partida:Partida) {
      this.gol.jogador=jogador;
      this.gol.partida=partida;

      if(jogador.time.id==partida.time1.id){
        this.golsTime1++;
      }else{
        this.golsTime2++;
      }

      partida.placar=this.golsTime1+' X '+this.golsTime2;
      this.service.alterarPlacar(partida);


     this.service.adicionar(this.gol)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Gol de '+ this.gol.jogador.nome+' Adicionado' });

      });


  }

    pesquisarJogadoresTime(partida:Partida){
    this.service.listarJogadoresTime(partida.time1.id)
    .then((dados)=>{
      this.jogadoresTime1=dados;
    });
      this.service.listarJogadoresTime(partida.time2.id)
    .then((dados2)=>{
      this.jogadoresTime2=dados2;

      this.atualizaPlacar(partida);

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


    zerarPlacar(partida:Partida){
      if(partida.placar.endsWith('r')){
        this.conf.confirm({
          message: 'Partida terminou em 0 X 0 ?',
          accept: () => {
            this.golsTime1=0;
            this.golsTime2=0;
            partida.placar=this.golsTime1+' X '+this.golsTime2;
            this.service.alterarPlacar(partida);
          }
        });

      }else{
        if(partida.placar.endsWith('0 X 0')){
          this.messageService.add({ severity: 'warn', detail: 'Partida já está zerada' });
        }else{
          this.messageService.add({ severity: 'error', detail: 'Exclua gols nas opções de excluir gols' });
            }

        }
      }








}
