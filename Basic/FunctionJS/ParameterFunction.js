function sayHello(userName, userAge) { // userName คิอ Parameter
  return " Hello " + userName + " " + userAge;
}

function getAge() {
  return 19;
}

console.log("Say" + sayHello("Bobby", getAge())); // "Bobby" คิอ Argument
console.log(getAge() + 10);
