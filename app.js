var measure = require("./BackEnd/Measure");
//var express = require('./Backend/ExpressHandler')
const express = require("express");
const upload = require("express-fileupload");

const app = express();

app.use(express.static("public")); //Nem tudom ez mit csinál de király
app.use(upload({ debug: true }));

app.post("/upload", (req, res) => {
  if (req.files) {
    var file = req.files.file;
    return file.mv("./uploads/gcode.txt", (err) =>
      err ? res.status(500).json(err) : res.sendStatus(200)
    );
  }
  return res.status(400).send("NO FILE");
});

console.log(__dirname);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening at: http://localhost:${PORT}`));

//measure.start();
