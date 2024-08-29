const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const usuariosRuta = require("./routes/usuariosRouter");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// cambie el nombre a "api" para ser mas generico
app.use("/api", usuariosRuta);

app.listen(3000, () => {
  console.log("El servidor esta encendido");
});
    