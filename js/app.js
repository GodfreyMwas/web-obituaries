let candles = 0;
let flowers = 0;

function lightCandle() {
  candles++;
  document.getElementById("candleCount").innerText =
    candles + " Candles Lit";
}

function sendFlower(type) {
  flowers++;
  document.getElementById("flowerCount").innerText =
    flowers + " Flowers Sent";
}
