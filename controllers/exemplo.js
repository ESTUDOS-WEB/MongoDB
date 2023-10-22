const ControllerExemplo = {
  collection: {
    async criar(conexao, nomeCollection = "") {
      try {
        if (!conexao) throw new Error("Necessario informar conexão.");
        if (!nomeCollection)
          throw new Error("Necessario informar nome para coleção.");

        // Executa a operação
        await conexao.banco.createCollection(nomeCollection, {});

        // Mensagem confirmando execução da operação
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

        // Mensagem confirmando execução da operação
        console.log(`Collection ${nomeCollection} deletada.`);
      } catch (error) {
        // Erro ao tentar executar a operação
        console.error(error.message);
      }
    },
  },

  crud: {
    
    async consultarTodos(conexao, nomeCollection) {
      try {
        if (!conexao) throw new Error("Necessario informar conexão.");
        if (!nomeCollection)
          throw new Error("Necessario informar nome para coleção.");

        // Executa a operação
        const registros =  await conexao.banco.collection(nomeCollection).find().toArray()

        // Mensagem confirmando execução da operação
        console.table(registros);
      } catch (error) {
        // Erro ao tentar executar a operação
        console.error(error.message);
      }
    },
    
    async consultarUm(conexao, nomeCollection, codigo) {
      try {
        if (!conexao) throw new Error("Necessario informar conexão.");
        if (!nomeCollection)
          throw new Error("Necessario informar nome para coleção.");
          if (!codigo)
          throw new Error("Necessario informar o código.");

        // Executa a operação
        const registros =  await conexao.banco.collection(nomeCollection).findOne({codigo});

        // Mensagem confirmando execução da operação
        console.table(registros);
      } catch (error) {
        // Erro ao tentar executar a operação
        console.error(error.message);
      }
    },

    async inserir(conexao, nomeCollection, dados) {
      try {
        if (!conexao) throw new Error("Necessario informar conexão.");
        if (!nomeCollection)
          throw new Error("Necessario informar nome para coleção.");
        if (!dados) throw new Error("Necessario informar dodos.");

        // Executa a operação
        await conexao.banco.collection(nomeCollection).insertOne(dados);

        // Mensagem confirmando execução da operação
        console.log(`Registro adicionado na coleção ${nomeCollection}.`);
      } catch (error) {
        // Erro ao tentar executar a operação
        console.error(error.message);
      }
    },
  },
};

export { ControllerExemplo };
