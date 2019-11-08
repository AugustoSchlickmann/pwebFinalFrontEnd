import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import { FormsModule } from '@angular/forms';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { DataViewModule } from 'primeng/dataview';
import { ToastModule } from 'primeng/toast';
import {PasswordModule} from 'primeng/password';
import {DialogModule} from 'primeng/dialog';
import {FileUploadModule} from 'primeng/fileupload';
import {InputMaskModule} from 'primeng/inputmask';
import {CheckboxModule} from 'primeng/checkbox';


import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { ServicosService } from '../servicos.service';
import { MessageService } from 'primeng/api';
import { MeuPerfilComponent } from './meu-perfil/meu-perfil.component';
import { TableModule } from 'primeng/table';
import { OutremPerfilComponent } from './outrem-perfil/outrem-perfil.component';

@NgModule({
  declarations: [UsuarioCadastroComponent, MeuPerfilComponent, OutremPerfilComponent],
  imports: [
    CommonModule,
    DataViewModule,
    InputTextModule,
    ButtonModule,
    TooltipModule,
    ToastModule,
    FormsModule,
    ConfirmDialogModule,
    RouterModule,
    PanelModule,
    DropdownModule,
    InputTextModule,
    PasswordModule,
    DialogModule,
    FileUploadModule,
    InputMaskModule,
    TableModule,
    CheckboxModule
  ],
  providers: [
    ServicosService,
    MessageService
  ],
  exports:[
    UsuarioCadastroComponent
  ]
})
export class UsuarioModule { }
