import mysql from "mysql";

//configuração local do banco
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  database: "smartgamesdb",
});

//Função para conectar no banco de dados
function connectionDatabase() {
  connection.connect((error) => {
    if (error) {
      console.error("Erro ao conectar ao banco de dados: ", error.stack);
      return;
    }

    console.log(
      "Conexão bem-sucedida ao banco de dados como ID:",
      connection.threadId
    );
  });
}

//Função para fechar o banco de dados
function closeDatabase() {
  connection.end((error) => {
    if (error) {
      console.error(
        "Erro ao fechar a conexão do banco de dados: ",
        error.stack
      );
      return;
    }

    console.log("Conexão com banco de dados encerrada. ");
  });
}

export { connection, connectionDatabase, closeDatabase };
