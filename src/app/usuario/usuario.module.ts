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

import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { ServicosService } from '../servicos.service';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [UsuarioCadastroComponent],
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
    DialogModule
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