// alert("click me");
const submitBtn = document.getElementById("clickBtn");
const inputText = document.getElementById("myText");
const welcomeToTheBootcamp = document.getElementById("greetMe");

submitBtn.addEventListener("click", greetMe);

function myName() {
  welcomeToTheBootcamp.innerHTML =
    "Hello " + inputText.value + ", welcome to the bootcamp";
}
