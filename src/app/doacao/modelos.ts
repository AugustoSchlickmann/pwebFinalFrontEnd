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
    doador:Doador;
}

export class Doador{
nomeCompleto:string;
endereco:Endereco;
}

export class Endereco{
  cidade:string;
  estado:string;
}
