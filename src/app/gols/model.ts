
import { Partida } from '../partidas/model';
import { Jogador } from '../jogadores/model';

export class Gols{
  id:number;
  jogador=new Jogador();
  partida=new Partida();
}
