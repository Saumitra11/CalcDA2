let outputScreen = document.getElementById("output");
var element = document.body;
var button = document.querySelector(".mode");
var cal = document.querySelector(".cal");
var input = document.querySelector("input");
var btn = document.querySelectorAll(".btn");
var ops = document.querySelectorAll(".ops");
var detail = document.querySelector(".detail");
var info = document.querySelector(".info");
function display(num) {
  outputScreen.value += num;
}
function calculate() {
  try {
    outputScreen.value = eval(outputScreen.value);
  } catch (err) {
    alert("Input Error");
  }
}
function Clear() {
  outputScreen.value = "";
}
function del() {
  outputScreen.value = outputScreen.value.slice(0, -1);
}

function theme() {
  element.classList.toggle("light-mode");
  button.classList.toggle("light-mode");
  cal.classList.toggle("light-mode-cal");
  input.classList.toggle("light-mode-input");
  btn.forEach((el) => {
    el.classList.toggle("light-mode-btn");
  });
  ops.forEach((el) => {
    el.classList.toggle("light-mode-ops");
  });
  detail.classList.toggle("light-mode-text");
  info.classList.toggle("light-mode-text");
}
