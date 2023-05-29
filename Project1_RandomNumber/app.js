let yourNum = prompt("Enter Your Number");
let randomNum = Math.floor(Math.random() * 100);
if (yourNum === randomNum) {
  var result = "true";
} else {
  var result = "false";
}
document.getElementById("output").innerHTML = randomNum;
document.getElementById("input").innerHTML = yourNum;
document.getElementById("result").innerHTML = result;
