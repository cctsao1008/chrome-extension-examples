const button = document.getElementById("helloButton");
const output = document.getElementById("output");

button.addEventListener("click", () => {
  output.textContent = "Hello from Chrome Extension!";
});
