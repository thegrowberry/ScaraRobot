var measure = require('./BackEnd/Measure');
//var express = require('./Backend/ExpressHandler')
const express = require('express');
const app = express();

app.use(express.static(__dirname)); //Nem tudom ez mit csinál de király

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/FrontEnd/index.html')
});

console.log(__dirname);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

//measure.start();