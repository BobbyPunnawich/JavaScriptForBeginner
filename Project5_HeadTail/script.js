let round = prompt("คุณจะเล่นทั้งหมดกี่รอบ?");
var score = 0;
for (var i = 0; i < round; i++) {
  var ans = prompt("หัว หรือ ก้อย");
  var randomAns = Math.floor(Math.random() * 10);
  if (randomAns <= 4) {
    randomAns = "หัว";
  } else {
    randomAns = "ก้อย";
  }
  if (ans == randomAns) {
    score++;
    document.getElementById("game-list").innerHTML +=
      "คำตอบที่ถูก คือ " +
      randomAns +
      " โดยคุณตอบ " +
      ans +
      " ดังนั้น ทายถูก" +
      "<br>";
  } else {
    document.getElementById("game-list").innerHTML +=
      "คำตอบที่ถูก คือ " +
      randomAns +
      " แต่คุณตอบ " +
      ans +
      " ดังนั้น ทายผิด" +
      "<br>";
  }
}
document.getElementById("score").innerHTML = score + " / " + round;
