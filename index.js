import { ControllerExemplo } from "./controllers/exemplo";
import { conectar, desconectar } from "./utils/dataBase";

conectar()
    .then( async (conexao) => {
    
        await ControllerExemplo.collection.criar(conexao, "minha_nova_colecao");
        await ControllerExemplo.collection.deletar(conexao, "minha_nova_colecao");
        desconectar(conexao.conexao);

    })
    .catch(erro =>

        // Erro ao tentar se conectar 
        console.error(erro)
    
    );
