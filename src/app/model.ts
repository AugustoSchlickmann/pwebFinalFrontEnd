export class Usuario{
    id:number;
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
    endereco = new Endereco();
    noificacoes:Notificacao[];
    feitas:Doacao[];
    recebidas:Doacao[];

}

export class Notificacao{
  id:number;
  conteudo:string;
  lida:boolean;
}
export class Doacao{
  id:number;
  nome:string ;
  categoria:string;
  img:String;
  status:string;
  metodoFrete:string;
  descricao:string;
  votosPositivos:number;
  votosNegativos:number;
  dataInicio:string;
  dataFim:string;
}
export class Endereco{
  id:number;
  cidade:string;
  estado:string;
  bairro:string;
  rua:string;
  numero:string;
  complemento:string;
}
