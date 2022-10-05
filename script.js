"use strict";

const HTML = []; // global variables
let theme = localStorage.getItem("data-theme") ?? localStorage.setItem("data-theme", "light"); // default is light

// wait for the document to finish loading
window.addEventListener("DOMContentLoaded", init);

// initialize
function init() {
  HTML.switch = document.querySelector("#switch");
  HTML.switch.textContent = theme === "light" ? "Dark theme" : "Light theme";
  HTML.switch.addEventListener("click", toggleThemes);

  document.documentElement.setAttribute("data-theme", theme === "light" ? "light" : "dark");
}

// toggle between light and dark theme
function toggleThemes() {
  let theme = localStorage.getItem("data-theme");
  switch (theme) {
    case "dark":
      changeThemeToLight();
      break;

    case "light":
      changeThemeToDark();
      break;
  }
}

// change to light theme
function changeThemeToLight() {
  document.documentElement.setAttribute("data-theme", "light"); // set theme to light
  localStorage.setItem("data-theme", "light"); // save theme to local storage
  HTML.switch.textContent = "Dark theme";
}

// change to dark theme
function changeThemeToDark() {
  document.documentElement.setAttribute("data-theme", "dark"); // set theme to dark
  localStorage.setItem("data-theme", "dark"); // save theme to local storage
  HTML.switch.textContent = "Light theme";
}
