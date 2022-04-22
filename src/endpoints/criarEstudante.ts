import { Request, Response } from "express";
import moment from "moment";
import { connection } from "../connection";

export const criarEstudante  = ( async (req:Request, res:Response):Promise< void >=>{

    let statusCode:number = 400

    try {

        const turmaId = req.params.turmaId

        const {nome, email, data_nasc} = req.body

        const dataAjustada = moment(data_nasc, "DD/MM/YYYY").format("YYYY-MM-DD")
        
        if (!nome || !email || !data_nasc){
            statusCode = 405
            throw new Error("Insira 'nome', 'email' e 'data de nascimento (DD/MM/AAAA)' do estudante.")
        }

        await connection.raw(`
            INSERT INTO Estudante (id, nome, email, data_nasc, turma_id)
            VALUES (
                ${Date.now().toString()},
                "${nome}",
                "${email}",
                "${dataAjustada}",
                "${turmaId}"
            )
        `);

        statusCode = 201
        res.status(statusCode).send("Estudante criado com sucesso!")

    } catch (error:any) {
        res.status(statusCode).send(error.message)
    }

})