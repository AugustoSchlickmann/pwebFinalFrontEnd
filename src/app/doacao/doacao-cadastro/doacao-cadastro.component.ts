import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormControl } from '@angular/forms';
import { doacaoService } from '../doacaoService.service';
import { Doacao} from '../modelos';
import { Router } from '@angular/router';


@Component({
  selector: 'app-doacao-cadastro',
  templateUrl: './doacao-cadastro.component.html',
  styleUrls: ['./doacao-cadastro.component.css']
})
export class DoacaoCadastroComponent implements OnInit {

nova:Doacao=new Doacao();

categorias=[
  {label:'Vestimenta', value:'Vestimenta'},
  {label:'Eletrônicos', value:'Eletrônicos'},
  {label:'Brinquedos', value:'Brinquedos'},
  {label:'Livros', value:'Livros'},
  {label:'Ferramentas', value:'Ferramentas'},
  {label:'Outros', value:'Outros'},
];

metodos=[
  {label:'Doador Paga o Frete', value:'Doador Paga o Frete'},
  {label:'Recebedor Paga o Frete', value:'Recebedor Paga o Frete'},
  {label:'A Combinar', value:'A Combinar'},
];


  constructor(private service: doacaoService,
    private messageService: MessageService,
    private rotaprogramatica:Router) { }

  ngOnInit() {

  }

  cadastrar(form: FormControl) {

    this.nova.doador.idUsuario=1;

    this.service.adicionarDoacao(this.nova)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Doação ' + this.nova.nome + ' Cadastrada' });
        form.reset();
      });

      //this.rotaprogramatica.navigate(['/doacoes']);
  }
}
