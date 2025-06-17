export default function About() {
  const mainContentContainer = document.getElementById("content");

  const heroSection = document.createElement("section");
  heroSection.classList.add("about-hero");
  const sectionTitle = document.createElement("h2");
  sectionTitle.classList.add("section-title");
  sectionTitle.textContent = "About us";
  const sectionPara = document.createElement("p");
  sectionPara.classList.add("section-subtitle");
  sectionPara.textContent = "Passionate about food, obsessed with flavor.";

  mainContentContainer.appendChild(heroSection);
  heroSection.appendChild(sectionTitle);
  heroSection.appendChild(sectionPara);

  const detailsSection = document.createElement("section");
  detailsSection.classList.add("about-details");

  const contentContainer1 = document.createElement("div");
  contentContainer1.classList.add("content-box");
  const contentContainer2 = document.createElement("div");
  contentContainer2.classList.add("content-box");
  const missionHeader = document.createElement("h3");
  missionHeader.textContent = "Our Mission";
  const missionPara = document.createElement("p");
  missionPara.textContent =
    "We believe everyone deserves a burger that's more than just fast food. We're here to serve handcrafted meals made from quality ingredients and bold flavors, all while keeping things incredibly edible.";

  const storyHeader = document.createElement("h3");
  storyHeader.textContent = "Our story";
  const storyPara = document.createElement("p");
  storyPara.textContent =
    "It started with a simple backyard grill, a bag of buns, and the dream to build the best burger joint in town. What began as a weekend pop-up became a neighborhood favorite—and now, you're part of the journey too.";

  mainContentContainer.appendChild(detailsSection);
  detailsSection.appendChild(contentContainer1);
  contentContainer1.appendChild(missionHeader);
  contentContainer1.appendChild(missionPara);

  detailsSection.appendChild(contentContainer2);
  contentContainer2.appendChild(storyHeader);
  contentContainer2.appendChild(storyPara);
}
