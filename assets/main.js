// alert("click me");
const submitBtn = document.getElementById("clickBtn");
const inputText = document.getElementById("myText");
const welcomeToTheBootcamp = document.getElementById("sayHello");

submitBtn.addEventListener("click", sayHello);

function sayHello(sayHi) {
  welcomeToTheBootcamp.innerHTML =
    "Hello " + inputText.value + ", welcome to the bootcamp";
  return sayHello;
}

// console.log(sayHello);
