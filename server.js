const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers.js');

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

// Express HBS engine

hbs.registerPartials(__dirname + '/views/parciales', function(err) {});
app.set('view engine', 'hbs');




app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'jesus david',
        anio: new Date().getFullYear()
    });

});

app.get('/about', (req, res) => {

    res.render('about', {
        anio: new Date().getFullYear()
    });

});


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});