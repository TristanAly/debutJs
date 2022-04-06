// selecteurs
//   document.querySelector('h4').style.background = 'red'

const questionContainer = document.querySelector(".Click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const answers = document.querySelector("p");

console.log(btn1, btn2);

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  answers.classList.add("show-response");
  answers.style.background = "red";
});
btn2.addEventListener("click", () => {
  answers.classList.add("show-response");
  answers.style.background = "green";
});
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});
window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});
questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "blue";
});

answers.addEventListener("mouseover", () => {
  answers.style.transform = "rotate(2deg)";
});

//----------------------------------------------------

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;
});

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

//------------------------------------------------------

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cgv.checked) {
  } else {
    alert("Veuillez accepter les CGV");
  }
});
