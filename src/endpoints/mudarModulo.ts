import { Request, Response } from "express";
import { connection } from "../connection";

export const mudarModulo  = ( async (req:Request, res:Response):Promise< void >=>{

    let statusCode:number = 400

    try {
        
        const id = req.params.id

        const {modulo} = req.body

        if (!modulo){
            statusCode = 405
            throw new Error("Insira o módulo da turma.")
        }

        await connection.raw(`
            UPDATE Turma
            SET modulo = ${modulo}
            WHERE id = "${id}"
        `);

        statusCode = 201
        res.status(statusCode).send("Módulo alterado com sucesso!")

    } catch (error:any) {
        res.status(statusCode).send(error.message)
    }

})