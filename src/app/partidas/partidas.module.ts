import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { PartidasService } from './partidas.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartidasCadastroComponent } from './partidas-cadastro/partidas-cadastro.component';
import {DropdownModule} from 'primeng/dropdown';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [PartidasCadastroComponent],
  imports: [
    CommonModule,
    DropdownModule,
    ToastModule,
    ButtonModule,
    InputTextModule,
    FormsModule
  ],
  providers: [
    PartidasService,
    MessageService
  ],
  exports:[
    PartidasCadastroComponent
  ]
})
export class PartidasModule { }
