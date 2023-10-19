import { ControllerExemplo } from "./controllers/exemplo";
import { conectar, desconectar } from "./utils/dataBase";

conectar()
  .then(async (conexao) => {
    //await ControllerExemplo.collection.criar(conexao, "minha_nova_colecao");
    //await ControllerExemplo.collection.deletar(conexao, "minha_nova_colecao");
    
    await ControllerExemplo.crud.inserir(conexao, "minha_nova_colecao", {
      codigo: 2,
      descricao: "Produto 2",
      quantidade: 0,
      valorUnitario: 10,
    });

    desconectar(conexao.conexao);
  })
  .catch((erro) =>
    // Erro ao tentar se conectar
    console.error(erro)
  );
