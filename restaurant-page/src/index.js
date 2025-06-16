import "./styles.css";
import hambagaImage from "./hambaga.jpg";
console.log("hello World!");

const mainContentContainer = document.getElementById("content");

const sectionContainer = document.createElement("section");
sectionContainer.classList.add("hero-section");

const heroSectionContainer = document.createElement("div");
heroSectionContainer.classList.add("hero-text");

const heroTitle = document.createElement("h1");
heroTitle.classList.add("hero-title");
heroTitle.textContent = "INCREDIBLY EDIBLE";

const heroDescription = document.createElement("p");
heroDescription.classList.add("hero-description");
heroDescription.textContent =
  "Come try our new hamburgers made of meat, vegetables, bread, and whatever toppings you like!";

const heroImageContainer = document.createElement("div");
heroImageContainer.classList.add("hero-image");

const heroImage = document.createElement("img");
heroImage.src = hambagaImage;

mainContentContainer.appendChild(sectionContainer);
sectionContainer.appendChild(heroSectionContainer);
sectionContainer.appendChild(heroImageContainer);
heroSectionContainer.appendChild(heroTitle);
heroSectionContainer.appendChild(heroDescription);
heroImageContainer.appendChild(heroImage);
