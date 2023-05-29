let score = prompt("Enter Your Score");
var grade;
if (score >= 80) {
  grade = "Your Grade Is A";
} else if (score >= 70) {
  grade = "Your Grade Is B";
} else if (score >= 60) {
  grade = "Your Grade Is C";
} else if (score >= 50) {
  grade = "Your Grade Is D";
} else {
  grade = "Your Grade Is F";
}
document.getElementById("grade").innerHTML = grade;
