const express = require('express');

// Usaremos esta variable global para poder acceder a la base de datos desde cualquier parte de la aplicación
const _db;

const app = express();

app.get('/', (req, res) => {
    res.render('index.ejs')
})
var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb+srv://root:root@cluster0.lo8dg.mongodb.net/?retryWrites=true&w=majority";

// Otra forma de usar el método connect. Nos conectamos usando la "connection string"; que pasamos como primer parámetro del método. El segundo parámetro es una función de callback que se ejecuta cuando la conexión a la base de datos se ha efectuado (y es el punto seguro donde podemos empezar a hacer cosas, como por ejemlo, levantar el servior Express en el puerto 3000)
MongoClient.connect(uri, function(err, db) {
    if (err) throw err;
    console.log('Conectado a la base de datos correctamente.')
    
    // Objeto Db de MongoDB; para poder acceder a las bases de datos, colecciones, etc.
    _db = db;
    app.listen(3000)
  });