import XLSX from "xlsx";
import {
  connectionDatabase,
  closeDatabase,
  connection,
} from "../database/db.js";

const file = "./exeldata/jogos-ragnarok.xlsx";

async function insertDataIntoDatabase() {
  const workbook = XLSX.readFile(file); // Carrega o arquivo Excel
  const worksheet = workbook.Sheets["Planilha1"]; // Acessa a  planilha
  const games = XLSX.utils.sheet_to_json(worksheet); // Converte os dados para json

  try {
    await connectionDatabase(); // Conectando com o banco de dados

    const selectQuery =
      "SELECT COUNT(*) AS count FROM jogos WHERE nome = ? AND descricao = ?";
    const insertQuery =
      "INSERT INTO jogos (nome, descricao, imagem, preco, plataformas, lojas) VALUES (?, ?, ?, ?, ?, ?)";

    for (const game of games) {
      const { nome, descricao, imagem, preco, plataformas, lojas } = game; // Desestrura objeto

      // Verifica se o jogo já existe no banco de dados
      const [existingGame] = await new Promise((resolve, reject) => {
        connection.query(selectQuery, [nome, descricao], (error, results) => {
          if (error) reject(error);
          resolve(results);
        });
      });

      if (existingGame.count === 0) {
        // Se o jogo não existir, insere no banco de dados
        await new Promise((resolve, reject) => {
          connection.query(
            insertQuery,
            [nome, descricao, imagem, preco, plataformas, lojas],
            (error, results) => {
              if (error) reject(error);
              resolve();
            }
          );
        });
        console.log(`Jogo '${nome}' inserido com sucesso.`);
      } else {
        console.log(
          `Jogo '${nome}' já existe no banco de dados. Pulando inserção.`
        );
      }
    }

    console.log("Todos os jogos foram inseridos ou pulados com sucesso.");
  } catch (error) {
    console.error("Erro ao inserir ou verificar jogos: ", error);
  } finally {
    closeDatabase(); //Encerra conexão com o banco de dados
    return games;
  }
}

export { insertDataIntoDatabase };
