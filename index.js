import { ControllerExemplo } from "./controllers/exemplo";
import { conectar, desconectar } from "./utils/dataBase";

conectar()
  .then(async (conexao) => {
    const collection = "minha_nova_colecao";
    //await ControllerExemplo.collection.criar(conexao, collection);
    //await ControllerExemplo.collection.deletar(conexao, collection);

    // await ControllerExemplo.crud.inserir(conexao, collection, {
    //   codigo: 2,
    //   descricao: "Produto 2",
    //   quantidade: 0,
    //   valorUnitario: 10,
    // });

    //await ControllerExemplo.crud.consultarTodos(conexao, collection);

    desconectar(conexao.conexao);
  })
  .catch((erro) =>
    // Erro ao tentar se conectar
    console.error(erro)
  );
