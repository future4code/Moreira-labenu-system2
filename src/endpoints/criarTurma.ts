import { Request, Response } from "express";
import { connection } from "../connection";

export const criarTurma  = ( async (req:Request, res:Response):Promise< void >=>{

    let statusCode:number = 400

    try {

        const {nome, modulo} = req.body
        
        if (!nome){
            statusCode = 405
            throw new Error("Insira 'nome' e 'módulo' da turma.")
        }

        await connection.raw(`
            INSERT INTO Turma (id, nome, modulo)
            VALUES (
                ${Date.now().toString()},
                "${nome}",
                "${modulo}"
            )
        `);

        statusCode = 201
        res.status(statusCode).send("Turma criada com sucesso!")

    } catch (error:any) {
        res.status(statusCode).send(error.message)
    }

})