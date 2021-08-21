//Getting all the id
const memory8Gb = document.getElementById("8Gb-memory");
const memory16Gb = document.getElementById("16Gb-memory");
const ssd256Gb = document.getElementById("256Gb-ssd");
const ssd512Gb = document.getElementById("512Gb-ssd");
const ssd1Tb = document.getElementById("1Tb-ssd");
const freeDelivery = document.getElementById("free-delivery");
const costlyDelivery = document.getElementById("costly-delivery");
const totalPrice = document.getElementById("total-price");
const initialPrice = document.getElementById("initial-price");
const memoryPrice = document.getElementById("memory-cost");
const ssdPrice = document.getElementById("storage-cost");
const deliveryCost = document.getElementById("delivery-cost");
const totalGrand = document.getElementById("total");

//setting price of memory8Gb
memory8Gb.addEventListener("click", function () {
  memoryPrice.innerText = "0";

  updateTotal();
  Btnenable();
});
//setting price of memory16Gb
memory16Gb.addEventListener("click", function () {
  memoryPrice.innerText = "180";

  updateTotal();
  Btnenable();
});

//updateTotal price
function updateTotal() {
  const initial = Number(initialPrice.innerText);
  const memoryValue = Number(memoryPrice.innerText);
  const ssdValue = Number(ssdPrice.innerText);
  const deliveryValue = Number(deliveryCost.innerText);

  const grandTotal = initial + memoryValue + ssdValue + deliveryValue;

  totalPrice.innerText = grandTotal;
  totalGrand.innerText = grandTotal;
}
//setting price of ssd256Gb
ssd256Gb.addEventListener("click", function () {
  ssdPrice.innerText = "0";

  updateTotal();
  Btnenable();
});
//setting price of ssd512Gb
ssd512Gb.addEventListener("click", function () {
  ssdPrice.innerText = "100";

  updateTotal();
  Btnenable();
});
//setting price of ssd512Gb
ssd1Tb.addEventListener("click", function () {
  ssdPrice.innerText = "180";

  updateTotal();
  Btnenable();
});
//setting price of freedelivery
freeDelivery.addEventListener("click", function () {
  deliveryCost.innerText = "0";

  updateTotal();
  Btnenable();
});
//setting price of costydelivery
costlyDelivery.addEventListener("click", function () {
  deliveryCost.innerText = "20";

  updateTotal();
  Btnenable();
});
//Button disable function
function Btndisable() {
  const buttonDs = document.getElementById("apply");
  buttonDs.disabled = true;
}
//Button enable function
function Btnenable() {
  const buttonDs = document.getElementById("apply");
  buttonDs.disabled = false;
}
//apply button clicked
document.getElementById("apply").addEventListener("click", function () {
  const promoCode = document.getElementById("promo-code");
  let promoValue = promoCode.value;
//condition for usinng the promocode
  if (promoValue == "stevekaku") {
    const totalGrandValue = parseFloat(
      document.getElementById("total").innerText
    );
    const finalGrandTotal = parseFloat(totalGrandValue * 0.2);
    const finalTotal = totalGrandValue - finalGrandTotal;
    document.getElementById("total").innerText = finalTotal;
    promoCode.value = " ";
    Btndisable();
  } else {
    promoCode.value = " ";
  }
});
