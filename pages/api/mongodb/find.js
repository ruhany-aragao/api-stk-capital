const conn = require("../db/conn.js");
const mongoose = require("mongoose");
conn();

async function Main(request, response) {
  const collectionName = request.query.collection || "core.relatorio";
  delete mongoose.connection.models[collectionName];
  const relatorioSchema = new mongoose.Schema();
  const Collection = mongoose.model(
    collectionName,
    relatorioSchema,
    collectionName
  );

  response.setHeader("Cash-Control", "s-maxage=10, stale-while-revalidate");

  Collection.find({}).then((result) => {
    response.json({ resultado: result, collection: collectionName });
  });
}

export default Main;
