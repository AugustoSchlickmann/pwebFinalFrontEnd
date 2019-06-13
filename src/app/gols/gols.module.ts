import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { GolsService } from './gols.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GolsCadastroComponent } from './gols-cadastro/gols-cadastro.component';
import {DropdownModule} from 'primeng/dropdown';
import { MessageService } from 'primeng/api';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [GolsCadastroComponent],
  imports: [
    CommonModule,
    DropdownModule,
    ToastModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    TableModule
  ],
  providers: [
    GolsService,
    MessageService
  ],
  exports:[
    GolsCadastroComponent
  ]
})
export class GolsModule { }
