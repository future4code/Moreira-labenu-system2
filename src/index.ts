import {app} from "./app"
import { funcaoGet } from "./endpoints/get"

app.get("/", funcaoGet)
