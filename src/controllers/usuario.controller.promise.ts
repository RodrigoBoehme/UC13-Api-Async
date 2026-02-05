import { Request,Response } from "express";
import { UsuarioServicePromise } from "../services/usuario.service.promise";
export const UsuarioControllerPromise={
    listar(req:Request,res:Response){
        UsuarioServicePromise.listar()
        .then((lista)=>res.json(lista))
        .catch((erro)=>res.status(500).json({
            error:erro.message
        }))

    },
    //Buscar Por id
    buscar(req:Request,res:Response){
        const id=Number(req.params.id)

        UsuarioServicePromise.buscarPorId(id)
        .then((user)=>res.json(user))
        .catch((erro)=>res.status(404).json({
        error:erro.message}))
    }
}