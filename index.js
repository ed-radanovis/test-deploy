const express = require("express");

const app = express();

app.get("/", (request, response) => {
  return response.json({message: "server is up Ed!!!"});
});

app.listen(3333);
