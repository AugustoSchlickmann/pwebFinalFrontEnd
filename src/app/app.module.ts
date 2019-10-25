import { UsuarioModule } from './usuario/usuario.module';
import { DoacaoModule } from './doacao/doacao.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ConfirmationService, MenuItem } from 'primeng/api';
import {Routes, RouterModule} from '@angular/router';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {TableModule} from 'primeng/table';
import { FormsModule } from '@angular/forms';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {SidebarModule} from 'primeng/sidebar';
import { DoacaoPesquisaComponent } from './doacao/doacao-pesquisa/doacao-pesquisa.component';
import { UsuarioCadastroComponent } from './usuario/usuario-cadastro/usuario-cadastro.component';



const rotas: Routes = [
  {path: 'doacoes', component: DoacaoPesquisaComponent},
  {path: 'usuario/novo', component: UsuarioCadastroComponent},
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(rotas),
    InputTextModule,
    ButtonModule,
    TooltipModule,
    TableModule,
    FormsModule,
    ConfirmDialogModule,
    RouterModule,
    SidebarModule,
    DoacaoModule,
    UsuarioModule


  ],
  providers: [
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
