const { SSL_OP_EPHEMERAL_RSA } = require("constants");
const createSerialCom = require("./SerialCom");
const fs = require("fs");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports.start = async function start() {
  const serialHandler = createSerialCom();

  const array = fs
    .readFileSync("BackEnd/gcode.txt")
    .toString()
    .replace(/[\r]+/g, "") // linux/windows line break diff
    .split("\n");

  for (const item of array) {
    if (item[0] === ";") continue;

    const operation = item.split(" ")[0];

    switch (operation) {
      case "G0": {
        console.log(item);
        serialHandler.SendMessage(item);
        await sleep(3000);
        break;
      }
      case "M": {
        console.log("Measure started!");
        break;
      }
      default: {
        console.log("Rainbow setting changed!");
        break;
      }
    }
  }
  console.log("Measure function finished!");
};
