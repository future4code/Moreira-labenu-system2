

export class Estudante {
    constructor(
      private id: string,
      private nome: string,
      private email:string,
      private data_nasc: string,
      private turma_id: string) {}
  
    public getIdEstudante = (): string => {
      return this.id;
    };
  
    public getNomeEstudante = (): string => {
      return this.nome;
    };
  
    public getEmailEstudante = (): string => {
      return this.email;
    };
  
    public getNascimentoEstudante = (): string => {
      return this.data_nasc;
    };
    
  
    public getIdTurmaEstudante = (): string => {
      return this.turma_id;
    };
  }