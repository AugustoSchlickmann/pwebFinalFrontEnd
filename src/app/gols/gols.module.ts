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
import { GolsExcluirComponent } from './gols-excluir/gols-excluir.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [GolsCadastroComponent, GolsExcluirComponent],
  imports: [
    CommonModule,
    DropdownModule,
    ToastModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    TableModule,
    ConfirmDialogModule
  ],
  providers: [
    GolsService,
    MessageService
  ],
  exports:[
    GolsCadastroComponent,
    GolsExcluirComponent
  ]
})
export class GolsModule { }
