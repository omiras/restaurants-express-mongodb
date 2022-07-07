const express = require('express');

// Vuestra connection string a Mongo Atlas. Sin especificar la base de datos
// NO COPIAR MI CONNECTION STRING!
const uri = "mongodb+srv://root:root@cluster0.lo8dg.mongodb.net/?retryWrites=true&w=majority";

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const app = express();

app.get('/', (req, res) => {
    res.render('index.ejs', {
        documents: []
    })
});

app.get('/search', async (req, res) => {
    // 1. Recuperar la query string
    // 2. Recuperar el campo restaurant_id

    const { restaurant_id, borough } = req.query;

    let query = {}; // En este objeto vamos a guardar la consulta que vamos a realizar a MongoDB

    // ¿Cómo detectar si el usuario ha llenado restaurant_id o borough?
    // Si solo nos llena un campo, significa que solo restaurant_id o borough vendrán con valor

    // Si tiene valor restaurant_id, significa que el usuario va a hacer la búsqueda por restaurant_id
    if (restaurant_id) {
        query = { restaurant_id }
    }

    else if (borough) {
        query = { borough }
    }

    // 3. Hacer una consulta a MongoDB, base de datos "sample_restaurants", colección "restaurants" y buscar todos los restaurantes cuyo restaurant_id sea el que nos pasan de la query string
    const database = client.db('sample_restaurants');
    const restaurants = database.collection('restaurants');

    const documents = await restaurants.find(query).toArray();


    // 4. Pasar a la vista todos los documentos recuperados de la consulta
    res.render('index.ejs', {
        documents
    })

    // 5. En el index.ejs, generar tantas 'cards' como documentos hemos recuperado 

})

// Usamos una función de callback que se ejecuta cuando la conexión a la base de datos se ha efectuado (y es el punto seguro donde podemos empezar a hacer cosas, como por ejemlo, levantar el servior Express en el puerto 3000)
client.connect(function (err) {
    if (err) throw err;

    console.log('Conectado a la base de datos correctamente.')

    // Objeto Db de MongoDB; para poder acceder a las bases de datos, colecciones, etc.
    app.listen(3000)
});


