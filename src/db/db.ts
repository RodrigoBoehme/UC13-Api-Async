//Define o tipo de usuario (modelo de dado)
export type Usuario={
    id:number
    nome:string
    email:string
    ativo:boolean
}
//Array que simula o banco de dados
export const usuarios:Usuario[]=[
    {id:1,nome:"Ana",email:"ana@gmail.com",ativo:true},
    {id:2,nome:"Italo",email:"italemail@gmail.com",ativo:true},
    {id:3,nome:"Alguem",email:"nenhum@gmail.com",ativo:true}
]

//Função para simular demora de banco/API (I/O) |Entrada/Saída
export const delay=(ms:number)=>
    //Retorna uma promise que resolve depois de "ms" (milissegundos)
new Promise<void>((resolve)=>setTimeout(resolve,ms))
