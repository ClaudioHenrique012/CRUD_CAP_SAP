const cds = require("@sap/cds");
const { where, UPDATE, INSERT } = require("@sap/cds/lib/ql/cds-ql");
const { results } = require("@sap/cds/lib/utils/cds-utils");

module.exports = (srv) => {
  srv.on("READ", "GetEstudantes", async (req) => {
    try {
      let filtro = req.data;
      const { Estudantes } = cds.entities("sap.cap.escola");
      dados = await SELECT.from(Estudantes).where(filtro);

      return dados;
    } catch (error) {
      console.error("Erro ao ler dados de estudantes " + err);
      throw err;
    }
  });
  srv.after("READ", "Estudantes", (data) => {
    return data.map((d) => {
      console.log(d);
    });
  });

  srv.on("CREATE", "UpdateEstudantes", async (req, res) => {
    let primeiroNome = req.data.primeiro_nome;
    let estudanteEmail = req.data.email;

    let result = await cds
      .transaction()
      .run(
        UPDATE(Estudantes)
          .set({ primeiro_nome: primeiroNome })
          .where({ email: estudanteEmail })
      )
      .then((resolve, reject) => {
        if (typeof resolve !== "undefined" && resolve >= 1) {
          return req.data;
        } else {
          console.log("erro não encontrado ");
          return null;
        }
      })
      .catch((err) => {
        console.error("Erro ao atualizar dados de estudantes ");
        return err;
      });

    return result;
  });

  srv.on("CREATE", "InsertEstudantes", async (req, res) => {
    let result = await cds
      .transaction(req)
      .run(INSERT.into(Estudantes).entries(req.data))
      .then((resolve, reject) => {
        if (typeof resolve !== "undefined" && resolve >= 1) {
          return req.data;
        } else {
          console.log("Nenhum dado inserido");
          return null;
        }
      })
      .catch((err) => {
        console.error("Erro ao inserir dados de estudantes ");
        return err;
      });

    return result;
  });

  srv.on("CREATE", "InsertEstudantes", async (req, res) => {
    let result = await cds
      .transaction(req)
      .run(
        DELETE.from(Estudantes).where({
          email: req.data.email,
        })
      )
      .then((resolve, reject) => {
        if (typeof resolve !== "undefined" && resolve >= 1) {
          return req.data;
        } else {
          console.log("Nenhum dado deletado");
          return null;
        }
      })
      .catch((err) => {
        console.error("Erro ao deletar dados de estudantes ");
        return err;
      });

    return result;
  });
};
