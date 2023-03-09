const conn = require("./db/conn.js");
const mongoose = require("mongoose");
conn();

async function tempo(request, response) {
  delete mongoose.connection.models["star_users"];
  const relatorioSchema = new mongoose.Schema();
  const collectionName = "star_users";
  const Relatorio = mongoose.model(collectionName, relatorioSchema);

  Relatorio.find({}).then((result) => {
    result.forEach((element) => {
      let json_string = JSON.stringify(element.toJSON().email_address);
      response.write(json_string);
    });
    response.send();
  });

  //   response.json({
  //     date: dynamicDate.toGMTString(),
  //     weather: weatherData,
  //   });
}

export default tempo;
