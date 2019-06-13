import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { VisaogeralService } from './visaogeral.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisaogeralCampeonatoComponent } from './visaogeral-campeonato/visaogeral-campeonato.component';
import {DropdownModule} from 'primeng/dropdown';
import { MessageService } from 'primeng/api';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [VisaogeralCampeonatoComponent],
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
    VisaogeralService,
    MessageService
  ],
  exports:[
    VisaogeralCampeonatoComponent
  ]
})
export class VisaogeralModule { }
