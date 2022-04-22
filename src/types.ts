export type estudante = {
    id: string,
    nome: string,
    email: string,
    data_nasc: string,
    turma_id: string,
    hobbies: string []
}


export type docente = {
    id: string,
    nome: string,
    email: string,
    data_nasc: string,
    turma_id: string,
    especialidade: Especialidade
}


export enum Especialidade{
    JS = "JS",
    CSS = "CSS",
    React = "React",
    Typescript = "Typescript",
    POO = "POO"
}

export enum Modulo{
    zero = 0,
    um = 1,
    dois = 2,
    tres = 3,
    quatro = 4,
    cinco = 5,
    seis = 6,
}

export type turma = {
    id: string,
    name: string,
    docentes: docente[],
    estudantes: estudante[],
    modulo: Modulo
}
