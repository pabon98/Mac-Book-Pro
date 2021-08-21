const memory8Gb = document.getElementById("8Gb-memory");
const memory16Gb = document.getElementById("16Gb-memory");
const ssd256Gb = document.getElementById("256Gb-ssd");
const ssd512Gb = document.getElementById("512Gb-ssd");
const ssd1Tb = document.getElementById("1Tb-ssd");
const freeDelivery = document.getElementById("free-delivery");
const costlyDelivery = document.getElementById("costly-delivery");
const totalPrice = document.getElementById("total-price");
const totalGrand = document.getElementById("total");
const initialPrice = document.getElementById("initial-price");
const memoryPrice = document.getElementById("memory-cost");
const ssdPrice = document.getElementById("storage-cost");
const deliveryCost = document.getElementById("delivery-cost");

memory8Gb.addEventListener("click", function () {
  memoryPrice.innerText = "0";

  updateTotal();
});
memory16Gb.addEventListener("click", function () {
  memoryPrice.innerText = "180";

  updateTotal();
});

//updateTotal
function updateTotal() {
  const initial = Number(initialPrice.innerText);
  const memoryValue = Number(memoryPrice.innerText);
  const ssdValue = Number(ssdPrice.innerText);
  const deliveryValue = Number(deliveryCost.innerText);

  const grandTotal = initial + memoryValue + ssdValue + deliveryValue;

  totalPrice.innerText = grandTotal;
  totalGrand.innerText = grandTotal;
}

ssd256Gb.addEventListener("click", function () {
  ssdPrice.innerText = "0";

  updateTotal();
});
ssd512Gb.addEventListener("click", function () {
  ssdPrice.innerText = "100";

  updateTotal();
});
ssd1Tb.addEventListener("click", function () {
  ssdPrice.innerText = "180";

  updateTotal();
});
freeDelivery.addEventListener("click", function () {
  deliveryCost.innerText = "0";

  updateTotal();
});
costlyDelivery.addEventListener("click", function () {
  deliveryCost.innerText = "20";

  updateTotal();
});
