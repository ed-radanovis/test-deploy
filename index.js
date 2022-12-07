const express = require("express");

const app = express();

app.get("/", (request, response) => {
  return response.json({message: "server is up Ed!BUNITÃO!!"});
});

app.get("/atualizou", (request, response) => {
  return response.json({message: "server is up Ed!BUNITÃO!! e GOSTOSÃO!!!!!"});
});


app.post('/test',(request, response) => {
  const {name, date} = request.body

  return response.json({name, date})
})
app.listen(3333);
