import "../styles.css";
import Home from "./home.js";
import Menu from "./menu.js";
import About from "./about.js";
const navButtons = document.querySelectorAll(".nav-button");

Home();

function handleNavigation(e) {
  const mainContentContainer = document.getElementById("content");

  if (e.target.id === "home") {
    mainContentContainer.innerHTML = "";
    return Home();
  } else if (e.target.id === "menu") {
    mainContentContainer.innerHTML = "";
    return Menu();
  } else if (e.target.id === "about") {
    mainContentContainer.innerHTML = "";
    return About();
  }
}

navButtons.forEach((button) =>
  button.addEventListener("click", handleNavigation)
);
