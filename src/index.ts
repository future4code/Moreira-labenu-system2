import {app} from "./app"
import { buscaNomeEstudante } from "./endpoints/buscaNomeEstudante"
import { buscarDocentes } from "./endpoints/buscarDocentes"
import { buscarTurma } from "./endpoints/buscarTurma"
import { criarDocente } from "./endpoints/criarDocente"
import { criarEstudante } from "./endpoints/criarEstudante"
import { criarTurma } from "./endpoints/criarTurma"
import { integrantesTurma } from "./endpoints/integrantesTurma"
import { mudarDocenteTurma } from "./endpoints/mudarDocenteTurma"
import { mudarEstudanteTurma } from "./endpoints/mudarEstudanteTurma"
import { mudarModulo } from "./endpoints/mudarModulo"
// criar turma #
app.post("/", criarTurma)

app.get("/", buscarTurma)

app.put("/turma/:id", mudarModulo)

app.post("/estudante/:turmaId", criarEstudante)

app.get("/estudante", buscaNomeEstudante)

app.put("/:id/:turmaId", mudarEstudanteTurma)

app.post("/docente/:turmaId", criarDocente)

app.get("/docente", buscarDocentes)

app.put("/docente/:id/:turmaId", mudarDocenteTurma)

app.get("/turma", integrantesTurma) //desafio 1