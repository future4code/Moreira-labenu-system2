import { Request, Response } from "express";
import { connection } from "../connection";

export const buscaNomeEstudante  = ( async (req:Request, res:Response):Promise< any >=>{

    let statusCode:number = 400

    try {
        
        const nome = req.query.nome

        if (!nome){
            statusCode = 404
            throw new Error("Insira um nome para a busca.")
        }

        const resultado = await connection.raw(`
            SELECT * FROM Estudante
            WHERE nome = ${nome}
        `);

        if (resultado.length === 0){
            statusCode = 404
            throw new Error("Nenhum estudante encontrado.")
        }

        statusCode = 200
        res.status(statusCode).send(resultado[0])
    } catch (error:any) {
        res.status(statusCode).send(error.message)
    }

})