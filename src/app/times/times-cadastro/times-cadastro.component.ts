import { Time } from './../model';
import { Component, OnInit } from '@angular/core';
import { TimesService } from '../times.service';
import { MessageService } from 'primeng/api';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-times-cadastro',
  templateUrl: './times-cadastro.component.html',
  styleUrls: ['./times-cadastro.component.css']
})
export class TimesCadastroComponent implements OnInit {

  time = new Time();

  constructor(
    private service: TimesService,
    private messageService: MessageService,
    private rota: ActivatedRoute
  ) { }

  inserir(form: FormControl) {
    this.service.adicionar(this.time)
    .then( ()=>{
      this.messageService.add({severity:'success', detail:'Time '+this.time.nome+' Cadastrado'});
      form.reset();
    });
  }

  ngOnInit() {

  }
  salvar(form: FormControl) {
      this.inserir(form);
    }
  }





