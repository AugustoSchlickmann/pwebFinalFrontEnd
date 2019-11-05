import { ActivatedRoute, Router } from '@angular/router';
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
  senha2:string;

  uploadedFiles: any[] = [];

  estados=[
    {label:'Santa Catarina', value:'Santa Catarina'},
    {label:'São Paulo', value:'São Paulo'},
    {label:'Paraná', value:'Paraná'},
    {label:'Sergipe', value:'Sergipe'},
  ];

  constructor(
    private service:ServicosService,
    private messageService: MessageService,
    private rotaprogramatica:Router
  ) { }

  ngOnInit() {
  }

  cadastrar(form: FormControl) {
    if(this.usuario.senha==this.senha2){

      this.service.cadastrarUsuario(this.usuario).then(() => {
        this.messageService.add({ severity: 'success', detail: 'Usuario ' + this.usuario.nomeCompleto + ' Cadastrado' });

      });
      this.rotaprogramatica.navigate(['doacoes']);
    }else{
      this.messageService.add({ severity: 'error', detail: 'Senhas diferentes' });
    }


  }

 // onUpload(event) {
//
  //  <h3>Foto</h3>
    //      <p-fileUpload mode="basic" name="demo[]" accept="image/*"
      //     maxFileSize="1000000" (click)="onUpload($event)"></p-fileUpload>
        //  </div>
        //this.usuario.imgUsuario=event.file;

    //this.messageService.add({severity: 'info', summary: 'Imagem Enviada', detail: ''});
//}

}
