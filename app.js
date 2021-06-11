const express = require('express');

const app = express();

const uri = "mongodb+srv://root:root@cluster0.lo8dg.mongodb.net/?retryWrites=true&w=majority";
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });


// Usamos una función de callback que se ejecuta cuando la conexión a la base de datos se ha efectuado (y es el punto seguro donde podemos empezar a hacer cosas, como por ejemlo, levantar el servior Express en el puerto 3000)
client.connect(function(err) {
    if (err) throw err;
    console.log('Conectado a la base de datos correctamente.')
    app.listen(3000)
  });


app.get('/', async (req, res) => {
    const db = client.db('sample_restaurants');
    const restaurants = db.collection('restaurants');

    if (!req.query) {
        res.render('index.ejs', {
            restaurants: []
        })
    }
    const results = await restaurants.find({restaurant_id: req.query.restaurant_id}).toArray();
    
    res.render('index.ejs', {
        restaurants: results
    })
})

