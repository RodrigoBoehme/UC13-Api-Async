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