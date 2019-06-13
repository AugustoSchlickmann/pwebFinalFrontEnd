import { Campeonato } from './../campeonatos/model';
import { Time } from '../times/model';

export class Partida{
  id:number;
  campeonato=new Campeonato();
  time1 = new Time();
  time2 = new Time();
  placar:string;
}
