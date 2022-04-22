import {app} from "./app"
import { buscaNomeEstudante } from "./endpoints/buscaNomeEstudante"
import { buscarTurma } from "./endpoints/buscarTurma"
import { criarEstudante } from "./endpoints/criarEstudante"
import { criarTurma } from "./endpoints/criarTurma"
import { mudarEstudanteTurma } from "./endpoints/mudarEstudanteTurma"
import { mudarModulo } from "./endpoints/mudarModulo"

app.post("/", criarTurma)

app.get("/", buscarTurma)

app.put("/turma/:id", mudarModulo)

app.post("/estudante/:turmaId", criarEstudante)

app.get("/estudante", buscaNomeEstudante)

app.put("/:id/:turmaId", mudarEstudanteTurma)