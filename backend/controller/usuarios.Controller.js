const conexion = require('../db/conexion')

// Nueva version un poco mas completa de nuevoDesempleado
const nuevoDesempleado = (req, res) => {
  const query = "INSERT INTO desempleado (correo, contraseña) VALUES (?, ?)";
  const { correo, contraseña } = req.body;

  conexion.query(query, [correo, contraseña], (err, result) => {
      if (err) {
          console.error("Error al insertar nuevo desempleado:", err);
          return res.status(500).send('Error al crear Desempleado');
      }

      res.status(201).json({ 
          id: result.insertId, 
          correo, 
          contraseña 
      });
  });
};


// Nueva version de nuevaEmpresa
const nuevaEmpresa = (req, res) => {
  const query = "INSERT INTO empresas (correo, contraseña, nombre_empresa) VALUES (?, ?, ?)";
  const { correo, contraseña, nombre_empresa } = req.body;

  conexion.query(query, [correo, contraseña, nombre_empresa], (err, result) => {
      if (err) {
          console.error("Error al insertar nueva empresa:", err);
          return res.status(500).send('Error al crear Empresa');
      }

      res.status(201).json({ 
          id: result.insertId, 
          correo, 
          contraseña, 
          nombre_empresa 
      });
      console.log('se agregó la empresa correctamente')
  });
};


module.exports = {
    nuevoDesempleado,
    nuevaEmpresa
}