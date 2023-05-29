let num = prompt("enter your lucky number");
console.log(num);
document.getElementById("result").innerHTML = Math.floor(Math.random() * 100);
document.getElementById("lucky").innerHTML = num;

