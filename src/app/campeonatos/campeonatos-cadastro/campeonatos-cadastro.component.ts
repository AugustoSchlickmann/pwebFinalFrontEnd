import { Campeonato } from './../model';
import { Component, OnInit } from '@angular/core';
import { CampeonatosService } from '../campeonatos.service';
import { MessageService } from 'primeng/api';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-campeonatos-cadastro',
  templateUrl: './campeonatos-cadastro.component.html',
  styleUrls: ['./campeonatos-cadastro.component.css']
})
export class CampeonatosCadastroComponent implements OnInit {

  campeonato = new Campeonato();

  constructor(
    private service: CampeonatosService,
    private messageService: MessageService,
    private rota: ActivatedRoute
  ) { }

  inserir(form: FormControl) {
    this.service.adicionar(this.campeonato)
    .then( ()=>{
      this.messageService.add({severity:'success', detail:'Campeonato '+this.campeonato.nome+' Cadastrado'});
      form.reset();
    });
  }

  ngOnInit() {

  }
  salvar(form: FormControl) {
      this.inserir(form);
    }
  }





