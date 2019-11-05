
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormControl } from '@angular/forms';
import { doacaoService } from '../doacaoService.service';
import { Doacao} from '../modelos';
import { Router, ActivatedRoute } from '@angular/router';
import { ServicosService } from 'src/app/servicos.service';
import { Usuario } from 'src/app/model';


@Component({
  selector: 'app-doacao-cadastro',
  templateUrl: './doacao-cadastro.component.html',
  styleUrls: ['./doacao-cadastro.component.css']
})
export class DoacaoCadastroComponent implements OnInit {

nova:Doacao=new Doacao();
logado:Usuario;

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
    private rotaprogramatica:Router,
    private rota: ActivatedRoute,
    private service2:ServicosService) { }

ngOnInit() {
    const codigoDoacao = this.rota.snapshot.params['id'];
    if(codigoDoacao){this.carregarDoacao(codigoDoacao);}

    this.logado = this.service2.Usuariologado();

  }

  cadastrar(form: FormControl) {

    if(this.logado!=null){
      this.nova.doador.idUsuario=this.logado.idUsuario;

    this.service.adicionarDoacao(this.nova)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Doação ' + this.nova.nome + ' Cadastrada' });
        form.reset();
      });
      this.rotaprogramatica.navigate(['/doacoes']);
    }else{
      this.messageService.add({ severity: 'error', detail: 'Você precisa de uma conta para cadastrar uma doação' });
    }



  }


  carregarDoacao(id:number){
    this.service.buscarPorCodigo(id)
      .then((data) => {
        this.nova = data;
      }
    );
  }

  alterar(form: FormControl) {
    this.service.alterar(this.nova)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Edição', detail:'Doacão '+this.nova.nome+' alterada'});
      form.reset();
    });
    this.rotaprogramatica.navigate(['/usuario/meuperfil']);
  }

  salvar(form: FormControl) {
    if(this.editando){
      this.alterar(form);
    }else{
      this.cadastrar(form);
    }
  }

  get editando(){
    return Boolean(this.nova.id);
  }


}
