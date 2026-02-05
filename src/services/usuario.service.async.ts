import {usuarios,Usuario,delay} from "../db/db"

export const UsuarioServiceAsync={
    //LISTAR: async => sempre retorna PROMISE
    async listar():Promise<Usuario[]> {
        //Simula E/S
        await delay(400)

        //Retorna lista
        return usuarios
    },

    //BUSCAR
    async buscarPorId(id:number):Promise<Usuario>{
        await delay(400)

        const user=usuarios.find((u)=>u.id===id)
        if(!user)throw new Error("Usuario não encontrado!")
        return user
    },
    //CRIAR
    async criar(nome:string,email:string):Promise<Usuario>{
        await delay(400)
        if(!nome||nome.trim().length<2)throw new Error("Nome Invalido");
        if(!email||!email.includes("@"))throw new Error("Email Invalido");
                
        const novoId=usuarios.length?usuarios[usuarios.length-1].id+1:1;

        const novo:Usuario={id:novoId,nome,email,ativo:true}
        usuarios.push(novo)
        return novo
    }
}