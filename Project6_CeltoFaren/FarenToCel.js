function toCelsius(fahrenheit) {
  let value = ((parseInt(fahrenheit) - 32) * 5) / 9;
  return value.toFixed(2) + " Celsius";
}
function toFahrenheit(celsius) {
  let value = (celsius * 9) / 5 + 32;
  return value.toFixed(2) + " Fahrenheit";
}
function display(elementId, value) {
  document.getElementById(elementId).innerHTML = "<b>" + value + "<b>";
}



