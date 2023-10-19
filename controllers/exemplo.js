import { conectar, desconectar } from "../utils/dataBase";

const ControllerExemplo = {
  
  collection: {

    async criar() {
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
        
        // Erro ao tentar se conectar
        console.error(error.message);
      
      }
    },
  
    async deletar(nomeCollection = "") {
      try {
        //Conexão com banco
        const { conexao, banco } = await conectar();
  
        try {
          if(!nomeCollection) throw new Error("Necessario informamar nome para coleção.")
  
          // Executa a operação
          await banco.dropCollection(nomeCollection);
  
          // Mensagem confirmando execçaõ da operação
          console.log(`Collection ${nomeCollection} deletada.`);
  
        } catch (error) {
          
          // Erro ao tentar executar a operação
          console.error(error.message);
        }
        
        // Finalizando coneção com banco
        desconectar(conexao);
  
      } catch (error) {
        
        // Erro ao tentar se conectar
        console.error(error.message);
      
      }
    },

  }

};

export { ControllerExemplo };
