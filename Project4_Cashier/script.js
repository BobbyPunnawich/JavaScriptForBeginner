let number = prompt("Enter Your Number Of Food");
var totalPrice = 0;
for (var i = 1; i <= number; i++) {
  itemPrice = prompt("Price Of Food Number " + i);
  totalPrice += parseInt(itemPrice);
  document.getElementById("price-list").innerHTML +=
    "Price Of Food Number " + i + " Is " + itemPrice + "<br>";
}
document.getElementById("result").innerHTML = "Total Is " + totalPrice;
