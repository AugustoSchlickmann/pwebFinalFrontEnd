import { Doacao } from './doacao/modelos';

export class Usuario{
    idUsuario:number;
	  nomeCompleto:string ;
    nomeUsuario:string;
    img:String;
    email:string;
    senha:string;
    dataNasc:string;
    idade:number;
    cpf:string;
    votosPositivos:number;
    votosNegativos:number;

    estado:string;
    cidade:string;
    bairro:string;
    rua:string;
    numero:string;
    complemento:string;

    feitas:Doacao[];
    recebidas:Doacao[];
    notificacoes:Notificacao[];
}

export class Notificacao{
  id:number;
  conteudo:string;
  lida:boolean;
}


