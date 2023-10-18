import { MongoClient } from "mongodb";
import confBanco from "../conf/dataBase";

const mongodb = new MongoClient(confBanco.URL_IP6);

async function conectar() {
    const conexao = await mongodb.connect();
    const banco = await conexao.db(confBanco.BANCO);
    console.log(`Conectada com banco: ${confBanco.BANCO}`);
    return { conexao, banco };
}

function desconectar(conexao) {
    conexao.close();
    console.log(`Desconectado com banco`);
}

export { conectar, desconectar };