const mysql = require('mysql2');

const conexion = mysql.createConnection({
    // correccion de nombre de localhost, tenia una mayuscula
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'proyecto'
});

conexion.connect((error) => {
    if (error) {
        console.log('No se pudo conectar a la base de datos:', error);
    } else {
        console.log('Se pudo conectar a la base de datos');
    }
});

module.exports = conexion;