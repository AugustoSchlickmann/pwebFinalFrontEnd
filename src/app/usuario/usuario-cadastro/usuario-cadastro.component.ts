import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServicosService } from 'src/app/servicos.service';
import { MessageService } from 'primeng/api';
import { Usuario } from 'src/app/model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})
export class UsuarioCadastroComponent implements OnInit {

  usuario = new Usuario();
  estados=[
    {label:'Santa Catarina', value:'Santa Catarina'},
    {label:'São Paulo', value:'São Paulo'},
    {label:'Paraná', value:'Paraná'},
    {label:'Sergipe', value:'Sergipe'},
  ];

  constructor(
    private service:ServicosService,
    private messageService: MessageService,
    private rota: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  cadastrar(form: FormControl) {

    this.service.cadastrarUsuario(this.usuario)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Usuario ' + this.usuario.nomeCompleto + ' Cadastrado' });
        form.reset();
      });
  }
}
