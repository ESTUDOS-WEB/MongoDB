import { conectar, desconectar } from "../utils/dataBase";

const ControllerExemplo = {
  collection: {
    async criar(conexao, nomeCollection = "") {
      try {
        if (!conexao) throw new Error("Necessario informamar conexão.");
        if (!nomeCollection)
          throw new Error("Necessario informamar nome para coleção.");

        // Executa a operação
        await conexao.banco.createCollection(nomeCollection, {});

        // Mensagem confirmando execçaõ da operação
        console.log(`Collection ${nomeCollection} criada.`);
      } catch (error) {
        // Erro ao tentar executar a operação
        console.error(error.message);
      }
    },

    async deletar(conexao, nomeCollection = "") {
      try {
        if (!conexao) throw new Error("Necessario informamar conexão.");
        if (!nomeCollection)
          throw new Error("Necessario informamar nome para coleção.");

        // Executa a operação
        await conexao.banco.dropCollection(nomeCollection);

        // Mensagem confirmando execçaõ da operação
        console.log(`Collection ${nomeCollection} deletada.`);
      } catch (error) {
        // Erro ao tentar executar a operação
        console.error(error.message);
      }
    },
  },
};

export { ControllerExemplo };
