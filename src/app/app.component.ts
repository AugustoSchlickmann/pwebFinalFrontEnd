import { Component } from '@angular/core';
import { ServicosService } from './servicos.service';
import { Usuario } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DOE-FÁCIL';

  logado:Usuario

  constructor(private service: ServicosService){}

  login(){
    this.service.buscarUsuarioPorCodigo(1).then((dados)=>{ this.logado=dados});
  }


}
