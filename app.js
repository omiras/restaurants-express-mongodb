const express = require('express');

// Usaremos esta variable global para poder acceder a la base de datos desde cualquier parte de la aplicación
let _db;

const app = express();

const uri = "TU-CONNECTIONSTRING-AQUI";
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });


// Usamos una función de callback que se ejecuta cuando la conexión a la base de datos se ha efectuado (y es el punto seguro donde podemos empezar a hacer cosas, como por ejemlo, levantar el servior Express en el puerto 3000)
client.connect(function(err, db) {
    if (err) throw err;
    console.log('Conectado a la base de datos correctamente.')
    
    // Objeto Db de MongoDB; para poder acceder a las bases de datos, colecciones, etc.
    _db = db;
    app.listen(3000)
  });

app.get('/', (req, res) => {
    res.render('index.ejs')
})