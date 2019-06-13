import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { JogadoresService } from './../jogadores.service';
import { Jogador } from './../model';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-jogadors-cadastro',
  templateUrl: './jogadores-cadastro.component.html',
  styleUrls: ['./jogadores-cadastro.component.css']
})
export class JogadoresCadastroComponent implements OnInit {

  jogador = new Jogador();
  times = [];
  posicoes=[
    {label:'Atacante', value:'Atacante'},
    {label:'Goleiro', value:'Goleiro'},
    {label:'Meio-Campo', value:'Meio-Campo'},
    {label:'Zagueiro', value:'Zagueiro'},
  ];

  constructor(
    private service: JogadoresService,
    private messageService: MessageService,
    private rota: ActivatedRoute
  ) { }

  ngOnInit() {
    this.pesquisarTimes();

  }



  inserir(form: FormControl) {
    this.service.adicionar(this.jogador)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Jogador ' + this.jogador.nome + ' Cadastrado' });
        form.reset();
      });
  }


  salvar(form: FormControl) {
      this.inserir(form);
  }

  pesquisarTimes(){
    this.service.listarTime()
    .then((dados)=>{
      this.times=dados
      .map(t => ({ label: t.nome, value: t.id }));
    });
  }

}
