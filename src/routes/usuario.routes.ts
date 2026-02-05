import { Router } from "express";

//Importa os 3 controlladores (cada um com uma abordage)
import {UsuarioControllerCallback} from "../controllers/usuario.controller.callback"
import {UsuarioControllerPromise} from "../controllers/usuario.controller.promise";
import {UsuarioControllerAsync} from "../controllers/usuario.controller.async";

const router=Router()

//CALLBACK

router.get("/cb/usuarios",UsuarioControllerCallback.listar)
router.get("/cb/usuarios/:id",UsuarioControllerCallback.buscar)
router.post("/cb/usuarios",UsuarioControllerCallback.criar)

//Promise
router.get("/promise/usuarios",UsuarioControllerPromise.listar)
router.get("/promise/usuarios/:id",UsuarioControllerPromise.buscar)
router.post("/promise/usuarios",UsuarioControllerPromise.criar)
//ASYNC/AWAIT
router.get("/async/usuarios",UsuarioControllerAsync.listar)
router.get("/async/usuarios/:id",UsuarioControllerAsync.buscar)
router.post("/async/usuarios",UsuarioControllerAsync.criar)

export default router