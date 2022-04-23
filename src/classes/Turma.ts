import { Modulo } from "../types";




export class EachClass {
    constructor(
      private id: string,
      private nome: string,
      public modulo: Modulo){}
  
    public getIdDaTurma = (): string => {
      return this.id;
    };
  
    public getNomeDaTurma = (): string => {
      return this.nome;
    };
  }
