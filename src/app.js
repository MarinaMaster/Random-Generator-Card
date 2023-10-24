/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import button from "bootstrap/js/src/button";
let suites = ["♦", "♥", "♠", "♣"];
let face = ["K", "J", "Q", "10", "9", "8", "7", "6", "5", "4", "3", "2", "A"];
window.onload = function() {
  const cardGenerator = () => {
    //write your code here
    let topSuite = document.querySelector(".topSuite");
    let number = document.querySelector(".number");
    let buttomSuite = document.querySelector(".buttomSuite");
    let randomFaceIndex = Math.floor(Math.random() * face.length);
    let randomSuitesIndex = Math.floor(Math.random() * suites.length);
    topSuite.innerHTML = suites[randomSuitesIndex];
    number.innerHTML = face[randomFaceIndex];
    buttomSuite.innerHTML = suites[randomSuitesIndex];

    let randomSuites = suites[randomSuitesIndex];
    if (randomSuites === "♥" || randomSuites === "♦") {
      document.querySelectorAll(".suitColor").forEach(suitElement => {
        suitElement.style.color = "red";
      });
    } else {
      document.querySelectorAll(".suitColor").forEach(suitElement => {
        suitElement.style.color = "black";
      });
    }
  };
  cardGenerator();

  let buttonElement = document.querySelector(".btn");
  buttonElement.addEventListener("click", () => {
    cardGenerator();
  });
};
