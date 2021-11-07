export class Produto {
    id: number;
    descricaocompleta: string;
    imagem: string;
    preco: number;
    codigobarras: string;
    precooferta?:number;
   
  
    constructor(id, descricaocompleta = '', preco = 0, precooferta = 0, codigobarras =0) {
      this.id = id
      this.descricaocompleta = descricaocompleta
      this.preco = preco
      this.codigobarras
      this.precooferta = precooferta
    }
  }