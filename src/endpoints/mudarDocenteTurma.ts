import { Request, Response } from "express";
import { connection } from "../connection";

export const mudarDocenteTurma  = ( async (req:Request, res:Response):Promise< void >=>{

    let statusCode:number = 400

    try {
        
        const id = req.params.id

        const turmaId = req.params.turmaId

        await connection.raw(`
            UPDATE Docente
            SET turma_id = ${turmaId}
            WHERE id = ${id}
        `);

        statusCode = 201
        res.status(statusCode).send("Docente alterado com sucesso!")

    } catch (error:any) {
        res.status(statusCode).send(error.message)
    }

})