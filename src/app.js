import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector(".card").classList.add(generateRandomSimbol());
  document.querySelector(".card").innerHTML = generateRandomNumber();
  document.querySelector(".btn").addEventListener("click", window.onload);
};

let generateRandomNumber = () => {
  let number = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumber = Math.floor(Math.random() * number.length);
  return number[indexNumber];
};

let generateRandomSimbol = () => {
  let simbol = ["♦", "♥", "♠", "♣"];
  let indexsimbol = Math.floor(Math.random() * simbol.length);
  return simbol[indexsimbol];
};
