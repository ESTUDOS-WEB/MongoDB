import { ControllerExemplo } from "./controllers/exemplo";
import { conectar, desconectar } from "./utils/dataBase";

conectar()
  .then(async (conexao) => {
    const collection = "minha_nova_colecao";
    //await ControllerExemplo.collection.criar(conexao, collection);
    //await ControllerExemplo.collection.deletar(conexao, collection);

    // await ControllerExemplo.crud.inserir(conexao, collection, {
    //   codigo: 1,
    //   descricao: "Produto 1",
    //   quantidade: 0,
    //   valorUnitario: 139.90,
    // });

    //await ControllerExemplo.crud.consultarTodos(conexao, collection);
    //await ControllerExemplo.crud.consultarUm(conexao, collection, 3);
    await ControllerExemplo.crud.deletarUm(conexao, collection, 2);

    desconectar(conexao.conexao);
  })
  .catch((erro) =>
    // Erro ao tentar se conectar
    console.error(erro)
  );
