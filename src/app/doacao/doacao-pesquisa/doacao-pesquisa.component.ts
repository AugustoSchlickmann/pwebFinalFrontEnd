import { Component, OnInit } from '@angular/core';
import { doacaoService } from '../doacaoService.service';
import { Doacao } from '../modelos';
import { SelectItem } from 'primeng/api';


@Component({
  selector: 'app-doacao-pesquisa',
  templateUrl: './doacao-pesquisa.component.html',
  styleUrls: ['./doacao-pesquisa.component.css']
})
export class DoacaoPesquisaComponent implements OnInit{

  doacoes : Doacao[];
  categorias : SelectItem[];
  sortOrder: number;
  sortField:String;
  displayDialog: boolean = false;

  constructor(  private service: doacaoService) { }

  ngOnInit() {
      this.service.pesquisarDoacoes()
      .then((dados)=>{
        this.doacoes=dados
      });

      this.categorias = [
        {label: 'Categoria ', value: 'categoria'},
        {label: 'Nome', value: 'nome'}
    ];
}
onSortChange(event) {
  let value = event.value;
      this.sortOrder = 1;
      this.sortField= value;
  }

  showDialog() {
    this.displayDialog = true;
}

}


