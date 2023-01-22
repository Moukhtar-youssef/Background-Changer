// @ts-nocheck
// start general variables
let input_1 = document.getElementById("1");
let input_2 = document.getElementById("2");
let direction = document.getElementById("direction");
let color_Text = document.getElementById("text");
// end general variables
// start reset variables
localStorage.setItem("reset", "#891308");
localStorage.setItem("reset_2", "#054189");
let reset_color_1 = localStorage.getItem("reset");
let reset_color_2 = localStorage.getItem("reset_2");
// end reset variables
window.onload = Change_Color();

function Change_Color() {
  document.body.style.backgroundImage = `linear-gradient(${direction.value} ,${input_1.value},${input_2.value})`;
  color_Text.innerHTML = `linear-gradient ${direction.value} ,${input_1.value},${input_2.value}`;
}
// set favorite color
function favourite_color() {
  localStorage.setItem("value", `${input_1.value}`);
  localStorage.setItem("value_2", `${input_2.value}`);
  localStorage.setItem("direction", `${direction.value}`);
  document.body.style.backgroundImage = `linear-gradient(${direction.value} ,${input_1.value},${input_2.value})`;
}
// get favorite color
function display_favourite() {
  input_1.value = localStorage.getItem("value");
  input_2.value = localStorage.getItem("value_2");
  direction.value = localStorage.getItem("direction");
  document.body.style.backgroundImage = `linear-gradient(${direction.value} ,${input_1.value},${input_2.value})`;
  Change_Color();
}
// reset the colors to basic color
function reset() {
  input_1.value = `${reset_color_1}`;
  input_2.value = `${reset_color_2}`;
  direction.value = "to right";
  Change_Color();
}
