import { Request, Response } from "express";
import { connection } from "../connection";

export const buscarTurma  = ( async (req:Request, res:Response):Promise< any >=>{

    let statusCode:number = 400

    try {
        
        const resultado = await connection.raw(`
            SELECT * FROM Turma
            WHERE modulo > 0
        `);

        if (resultado.length === 0){
            statusCode = 404
            throw new Error("Nenhuma turma ativa encontrada.")
        }

        statusCode = 200
        res.status(statusCode).send(resultado[0])

    } catch (error:any) {
        res.status(statusCode).send(error.message)
    }

})