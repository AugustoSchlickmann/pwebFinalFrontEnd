import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimesCadastroComponent } from './times-cadastro/times-cadastro.component';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {TableModule} from 'primeng/table';
import { TimesService } from './times.service';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TimesCadastroComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    TooltipModule,
    TableModule,
    ToastModule,
    FormsModule,
    ConfirmDialogModule,
    RouterModule
  ],
  exports:[
    TimesCadastroComponent
  ],
  providers: [
    TimesService,
    MessageService
  ]
})
export class TimesModule { }
