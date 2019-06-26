import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PartidasService } from './../partidas.service';
import { Partida } from './../model';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-partidas-cadastro',
  templateUrl: './partidas-cadastro.component.html',
  styleUrls: ['./partidas-cadastro.component.css']
})
export class PartidasCadastroComponent implements OnInit {

  partida = new Partida();
  times = [];
  campeonatos = [];

  constructor(
    private service: PartidasService,
    private messageService: MessageService,
    private rota: ActivatedRoute
  ) { }

  ngOnInit() {
    this.pesquisarTimes();
    this.pesquisarCampeonatos();
  }

  inserir(form: FormControl) {
    if(this.partida.time1.id==this.partida.time2.id){
      this.messageService.add({ severity: 'error', detail: 'Partida Inviável!' });
    }else{
    this.service.adicionar(this.partida)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Partida Cadastrada!' });
        form.reset();
      });
    }
  }


  salvar(form: FormControl) {
      this.inserir(form);
  }

  pesquisarTimes(){
    this.service.listarTime()
    .then((dados)=>{
      this.times=dados
      .map(t => ({ label: t.nome, value: t.id}));
    });
  }

  pesquisarCampeonatos(){
    this.service.listarCampeonato()
    .then((dados)=>{
      this.campeonatos=dados
      .map(c => ({ label: c.nome, value: c.id }));
    });
  }

}
