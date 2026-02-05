import express from "express";
import usuarioRoutes from "./routes/usuario.routes";

const app=express()
//Permite ler json
app.use(express.json())

//registra as rotas
app.use(usuarioRoutes)
export default app