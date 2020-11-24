var measure = require('./BackEnd/Measure');
//var express = require('./Backend/ExpressHandler')
const express = require('express');
const upload = require('express-fileupload');

const app = express();

app.use(express.static(__dirname)); //Nem tudom ez mit csinál de király
app.use(upload());


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/FrontEnd/index.html')
});

app.post('/', (req,res) =>{
    if(req.files)
    {
        var file = req.files.file;
        file.mv('./BackEnd/gcode.txt',function (err){
            if(err){
                res.send(err)
            }
        })
    }
});

console.log(__dirname);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

//measure.start();