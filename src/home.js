import mainImage from "./assets/images/cottonbro.jpeg";

export default function loadHome() {
  const main = document.createElement("main");
  const bgImage = document.createElement("img");

  const title = document.createElement("h1");
  title.id = "title";
  const description = document.createElement("p");
  const btnCallToAction = document.createElement("button");
  btnCallToAction.textContent = "See our space";
  const homeInfoContainer = document.createElement("div");
  homeInfoContainer.id = "home-info-container";
  homeInfoContainer.appendChild(title);
  homeInfoContainer.appendChild(description);
  homeInfoContainer.appendChild(btnCallToAction);
  const mainElements = [bgImage, homeInfoContainer];

  title.textContent = "O Kazukuta";
  description.textContent =
    "Join us for an intimate culinary escape where the waves meet the plate and every bite is a moment to remember";

  bgImage.src = mainImage;
  bgImage.alt = "plate with boiled eggs";
  bgImage.id = "hero-image";

  mainElements.forEach((element) => main.appendChild(element));

  return main;
}
