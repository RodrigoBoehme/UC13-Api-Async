import { usuarios, Usuario } from "../db/db";

export const UsuarioServicePromise = {
  //LISTAR: resolve com a lista
  listar(): Promise<Usuario[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(usuarios);
      }, 400);
    });
  },
  //BUSCAR: resolve com usuario ou reject com erro
  buscarPorId(id: number): Promise<Usuario> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = usuarios.find((u) => u.id === id);
        if (!user) return reject(new Error("Usuario não encontrado"));
        resolve(user);
      }, 400);
    });
  },
  //CRIAR: Valida, insere e resolve cim novo usuario
  criar(nome: string, email: string): Promise<Usuario> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!nome || nome.trim().length < 2)
          return reject(new Error("Nome Invalido"));
        if (!email || !email.includes("@"))
          return reject(new Error("Email invalido"));
        const novoId = usuarios.length
          ? usuarios[usuarios.length - 1].id + 1
          : 1;
        const novo: Usuario = { id: novoId, nome, email, ativo: true };
        usuarios.push(novo);
        resolve(novo);
      }, 400);
    });
  },
};
