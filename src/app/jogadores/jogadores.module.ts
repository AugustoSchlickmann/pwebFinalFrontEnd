import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { JogadoresService } from './jogadores.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JogadoresCadastroComponent } from './jogadores-cadastro/jogadores-cadastro.component';
import {DropdownModule} from 'primeng/dropdown';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [JogadoresCadastroComponent],
  imports: [
    CommonModule,
    DropdownModule,
    ToastModule,
    ButtonModule,
    InputTextModule,
    FormsModule
  ],
  providers: [
    JogadoresService,
    MessageService
  ],
  exports:[
    JogadoresCadastroComponent
  ]
})
export class JogadoresModule { }
