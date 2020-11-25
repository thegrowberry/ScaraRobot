//@ts-check

const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");

exports.SerialCom = class SerialCom {
  constructor(port = "COM4", baudRate = 9600) {
    this.serialPort = new SerialPort("COM4", { baudRate });
    const parser = new Readline();
    this.serialPort.pipe(parser);

    parser.on("data", (line) => console.log(`> ${line}`));
  }

  sendMessage(message) {
    this.serialPort.write(message + "\r\n");
  }
};

exports.createSerialCom = function createSerialCom(
  port = "COM4",
  baudRate = 9600
) {
  const serialPort = new SerialPort(port, { baudRate });
  const parser = new Readline();
  serialPort.pipe(parser);

  parser.on("data", (line) => console.log(`> ${line}`));

  function sendMessage(message) {
    serialPort.write(message + "\r\n");
  }
  return { sendMessage };
};
