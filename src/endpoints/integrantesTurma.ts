import { Request, Response } from "express";
import { connection } from "../connection";

export const integrantesTurma  = ( async (req:Request, res:Response):Promise< any >=>{

    let statusCode:number = 400

    try {

        const resultado = await connection.raw(`
            SELECT
            Docente.nome AS ProfessorResponsável,
            Turma.nome AS NomeDaTurma,
            Estudante.nome AS Aluno
            FROM Turma
            JOIN Docente
            ON Turma.id = Docente.turma_id
            JOIN Estudante
            ON Turma.id = Estudante.turma_id
        `);

        if (resultado.length === 0){
            statusCode = 404
            throw new Error("Nenhuma relação encontrada.")
        }

        statusCode = 200
        res.status(statusCode).send(resultado[0])

    } catch (error:any) {
        res.status(statusCode).send(error.message)
    }

})