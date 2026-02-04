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
        //Validacao do email
        if(!email||!email.includes("@")){
            return cb(new Error("Email inválido"))

        }
        //Gera id novo (último id +1)
        const novoId=usuarios.length?usuarios[usuarios.length-1].id+1:1
        //Monta o novo usuario
        const novo:Usuario={
            id:novoId,
            nome,
            email,
            ativo:true
        }
        // INSERT no array
        usuarios.push(novo)
        //Devolve o usuario criado 
        return cb(null,novo)
    }
}