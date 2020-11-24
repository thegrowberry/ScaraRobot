const { SSL_OP_EPHEMERAL_RSA } = require('constants');
var serialCom = require('./SerialCom');
var fs = require('fs');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
async function start(){
    var array = fs.readFileSync('BackEnd/gcode.txt').toString().split("\r\n");
    for (let i = 0; i < array.length; i++) {
        if(array[i][0] == 'G')
        {
            console.log(array[i]);
            serialCom.SendMessage(array[i]);
            await sleep(3000);
        }
        else if(array[i] == 'Measure')
        {
            console.log('Measure started!');
        }
        else
        {
            console.log('Rainbow setting changed!');
        }
    }
    console.log('Measure function finished!');
}

module.exports.start = start;