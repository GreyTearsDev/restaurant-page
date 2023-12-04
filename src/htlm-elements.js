import mainImage from "./assets/images/cottonbro.jpeg";

export const createBgImage = () => {
  const bgImage = document.createElement("img");

  bgImage.src = mainImage;
  bgImage.alt = "plate with boiled eggs";
  bgImage.id = "hero-image";

  return bgImage;
};

export const createMain = () => {
  const main = document.createElement("main");
  main.id = "main-home";
  return main;
};

export const createInfoElement = () => {
  const title = document.createElement("h1");
  const description = document.createElement("p");
  const btnCallToAction = document.createElement("button");
  const homeInfoContainer = document.createElement("div");

  title.id = "title";
  btnCallToAction.textContent = "See our space";
  title.textContent = "O Kazukuta";
  description.textContent =
    "Join us for an intimate culinary escape where the waves meet the plate and every bite is a moment to remember";

  homeInfoContainer.id = "home-info-container";
  homeInfoContainer.appendChild(title);
  homeInfoContainer.appendChild(description);
  homeInfoContainer.appendChild(btnCallToAction);

  return homeInfoContainer;
};

export const createHeader = () => {
  const ul = document.createElement("ul");
  const header = document.createElement("header");
  const liElements = createNavElements();

  liElements.forEach((name) => ul.appendChild(name));
  header.appendChild(ul);

  return header;
};

export const createNavElements = () => {
  const home = document.createElement("li");
  const menu = document.createElement("li");
  const contact = document.createElement("li");
  const liElements = [home, menu, contact];

  home.textContent = "Home";
  menu.textContent = "Menu";
  contact.textContent = "Contact";

  return liElements;
};
