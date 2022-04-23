import { Especialidade } from "../types";

export class Docente {
  constructor(
    private id: string,
    private nome: string,
    private email:string,
    private data_nasc: string,
    private turma_id: string,
    public especialidade: Especialidade,
    
  ) {}

  public getIdDocente = (): string => {
    return this.id;
  };

  public getNomeDocente = (): string => {
    return this.nome;
  };

  public getEmailDocente = (): string => {
    return this.email;
  };

  public getNascimentoDocente = (): string => {
    return this.data_nasc;
  };

  public getuIdTurmaDocente = (): string => {
    return this.turma_id;
  };
}