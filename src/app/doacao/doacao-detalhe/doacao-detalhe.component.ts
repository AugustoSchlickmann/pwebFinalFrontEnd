import { Component, OnInit } from '@angular/core';
import { doacaoService } from '../doacaoService.service';
import { Doacao } from '../modelos';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-doacao-detalhe',
  templateUrl: './doacao-detalhe.component.html',
  styleUrls: ['./doacao-detalhe.component.css']
})
export class DoacaoDetalheComponent implements OnInit {

  doacao = new Doacao();
  constructor(private service: doacaoService,
    private messageService: MessageService,
    private rota: ActivatedRoute,
    private rotaprogramatica:Router) { }

  ngOnInit() {
    const codigoDoacao = this.rota.snapshot.params['id'];
    if(codigoDoacao){
      this.carregarDoacao(codigoDoacao);
    }
  }

  carregarDoacao(id:number){
    this.service.buscarDoacaoPorCodigo(id)
      .then((data) => {
        this.doacao = data;
      }
    );
  }

}
