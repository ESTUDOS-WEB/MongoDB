const ControllerExemplo = {
  collection: {
    async criar(conexao, nomeCollection = "") {
      try {
        if (!conexao) throw new Error("Necessario informar conexão.");
        if (!nomeCollection)
          throw new Error("Necessario informar nome para coleção.");

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
        if (!conexao) throw new Error("Necessario informar conexão.");
        if (!nomeCollection)
          throw new Error("Necessario informar nome para coleção.");

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

  crud: {
    async inserir(conexao, nomeCollection, dados) {
      try {
        if (!conexao) throw new Error("Necessario informar conexão.");
        if (!nomeCollection)
          throw new Error("Necessario informar nome para coleção.");
        if (!dados) throw new Error("Necessario informar dodos.");

        // Executa a operação
        await conexao.banco.collection(nomeCollection).insertOne(dados);

        // Mensagem confirmando execçaõ da operação
        console.log(`Registro adicionado na coleção ${nomeCollection}.`);
      } catch (error) {
        // Erro ao tentar executar a operação
        console.error(error.message);
      }
    },
  },
};

export { ControllerExemplo };
