//Importa o array e o tipo Usuario do "banco"
import {usuarios, Usuario} from "../db/db"

//Cria um tipo generico de callback no padrao Node (erro, resultado)
type Callback<T>= (erro:Error|null, resultado?:T)=>void

export const UsuarioServiceCallback={
    //LISTAR: retorna todos os usuarios do Array
    listar(cb:Callback<Usuario[]>){
        //Simula tempo de banco (Demora)
        setTimeout(()=>{
            //Retorna: erro=null, resultado=usuarios
            cb(null,usuarios)
        },400)
    },
    //BUSCA POR ID: procura no array e devolve 1 usuario
    buscarPorId(id:number,cb:Callback<Usuario>){
        setTimeout(()=>{
            //Procura usuário pelo id
            const user=usuarios.find((u)=>u.id==id)
            //Se não achou, devolve erro
            if(!user) return cb(new Error("Usuário não Encontrado"))
            //Se achou retorna o resultado
        return cb (null,user)
        },400)
    },
    //CRIAR: valida e adiciona no array
    criar(nome:string,email:string,cb:Callback<Usuario>){
        // Validação do nome
        if(!nome||nome.trim().length<2){
            return cb(new Error("Nome Inválido"))
        }
    }
}