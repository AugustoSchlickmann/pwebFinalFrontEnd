import { VisaogeralModule } from './visaogeral/visaogeral.module';
import { PartidasModule } from './partidas/partidas.module';
import { CampeonatosModule } from './campeonatos/campeonatos.module';
import { JogadoresModule } from './jogadores/jogadores.module';
import { TimesCadastroComponent } from './times/times-cadastro/times-cadastro.component';
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
import { TimesModule } from './times/times.module';
import {JogadoresCadastroComponent} from './jogadores/jogadores-cadastro/jogadores-cadastro.component';
import { CampeonatosCadastroComponent } from './campeonatos/campeonatos-cadastro/campeonatos-cadastro.component';
import { PartidasCadastroComponent } from './partidas/partidas-cadastro/partidas-cadastro.component';
import { GolsCadastroComponent } from './gols/gols-cadastro/gols-cadastro.component';
import { GolsModule } from './gols/gols.module';
import { VisaogeralCampeonatoComponent } from './visaogeral/visaogeral-campeonato/visaogeral-campeonato.component';



const rotas: Routes = [
  {path: 'times/novo', component: TimesCadastroComponent},
  {path: 'jogadores/novo', component: JogadoresCadastroComponent},
  {path: 'campeonatos/novo', component: CampeonatosCadastroComponent},
  {path: 'partidas/novo', component: PartidasCadastroComponent},
  {path: 'gols/novo', component: GolsCadastroComponent},
  {path: 'visaogeral', component: VisaogeralCampeonatoComponent},
  //{path: '' , redirectTo:'categorias' ,pathMatch:'full'},
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
    TimesModule,
    JogadoresModule,
    CampeonatosModule,
    PartidasModule,
    GolsModule,
    VisaogeralModule

  ],
  providers: [
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
