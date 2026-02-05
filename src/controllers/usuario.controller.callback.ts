import { Request, Response } from "express";
import { UsuarioServiceCallback } from "../services/usuario.service.callback";
//Cria um tipo generico de callback no padrão Node: (erro,resultado)

//Exporta o controller de usuário usando callback
//O controller é reposnsavel por receber a requisição HTTP e chamar o serviço adequado
export const UsuarioControllerCallback = {
  listar(req: Request, res: Response) {
    //Chama o service para listar os usuarios
    //Aqui passa,aos uma função com parâmetro=callback
    UsuarioServiceCallback.listar((erro, lista) => {
      //Se o serviço retorna erro
      //envia status 500
      if (erro) return res.status(500).json({ erro: erro.message });
      //Se deu tudo certo rotorna a lista de usuario
      return res.json(lista);
    });
  },
  buscar(req: Request, res: Response) {
    const id = Number(req.params.id);
    //Chama um service passando um id e um callback para receber o resultado
    UsuarioServiceCallback.buscarPorId(id, (erro, user) => {
      //Se der erro (ex: Usuario nao encontrado retorna 400)
      if (erro) return res.status(404).json({ erro: erro.message });
      //Se encontrou retorna o usuarios em JSON

      return res.json(user);
    });
  },
  criar(req: Request, res: Response) {
    const { nome, email } = req.body;
    //Chama o service para criar usuario passando nome, email e o callback
    UsuarioServiceCallback.criar(nome,email,(erro,novo)=>{
        if(erro) return res.status(400).json({erro:erro.message})
        return res.status(201).json(novo)
    })
  }
};
