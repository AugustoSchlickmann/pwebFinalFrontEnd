import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampeonatosCadastroComponent } from './campeonatos-cadastro/campeonatos-cadastro.component';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { CampeonatosService } from './campeonatos.service';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CampeonatosCadastroComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    CampeonatosCadastroComponent
  ],
  providers: [
    CampeonatosService,
    MessageService
  ]
})
export class CampeonatosModule { }
