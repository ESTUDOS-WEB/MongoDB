import { conectar, desconectar } from "../utils/dataBase";

const ControllerExemplo = {
  
  async criarCollection() {
    try {
      //Conexão com banco
      const { conexao, banco } = await conectar();

      try {
        const nomeCollection = "minha_nova_colecao_2";

        // Executa a operação
        await banco.createCollection(nomeCollection, {});

        // Mensagem confirmando execçaõ da operação
        console.log(`Collection ${nomeCollection} criada.`);

      } catch (error) {
        
        // Erro ao tentar executar a operação
        console.error(error.message);
      }
      
      // Finalizando coneção com banco
      desconectar(conexao);

    } catch (error) {
      
      // Erro ao tentar de conectar
      console.error(error.message);
    
    }
  },

};

export { ControllerExemplo };
