import mainImage from "./assets/images/cottonbro.jpeg";
import image1 from "/src/assets/images/antoni-shkraba.jpeg";
import image2 from "/src/assets/images/karthik-reddy.jpeg";
import image3 from "/src/assets/images/alberta-studios.jpeg";
import image4 from "/src/assets/images/gustavo-peres..jpeg";
import image5 from "/src/assets/images/marina-leonova.jpeg";

export const createBgImage = () => {
  const bgImage = document.createElement("img");

  bgImage.src = mainImage;
  bgImage.alt = "plate with boiled eggs";
  bgImage.id = "hero-image";

  return bgImage;
};

export const createMain = () => {
  const main = document.createElement("main");
  return main;
};

export const createInfoElement = () => {
  const title = document.createElement("h1");
  const description = document.createElement("p");
  const btnCallToAction = document.createElement("button");
  const homeInfoContainer = document.createElement("div");

  title.id = "title";
  btnCallToAction.textContent = "See our space";
  btnCallToAction.id = "call-to-action";
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

function createNavElements() {
  const home = document.createElement("li");
  const menu = document.createElement("li");
  const contact = document.createElement("li");
  const liElements = [home, menu, contact];

  home.textContent = "Home";
  menu.textContent = "Menu";
  contact.textContent = "Contact";

  return liElements;
}

const menuItem = function createMenuItem(name, price, imageSrc) {
  const imageElement = document.createElement("img");
  const nameElement = document.createElement("h3");
  const priceElement = document.createElement("p");
  const namePriceContainer = document.createElement("div");
  const itemBody = document.createElement("div");

  imageElement.src = imageSrc;

  nameElement.textContent = name;
  nameElement.className = "item-name";
  priceElement.textContent = price;
  priceElement.className = "item-price";

  namePriceContainer.className = "name-price-container";
  namePriceContainer.appendChild(nameElement);
  namePriceContainer.appendChild(priceElement);

  itemBody.className = "item-body";
  itemBody.appendChild(imageElement);
  itemBody.appendChild(namePriceContainer);

  return itemBody;
};

export const getDishes = () => {
  const item1 = menuItem("Avocato Toast", "5300kz", image1);
  const item2 = menuItem("Pancake Caroline", "4500kz", image2);
  const item3 = menuItem("Alberta Pizza", "9500kz", image3);
  const item4 = menuItem("Family BBQ", "15000kz", image4);
  const item5 = menuItem("Pizza Basilicata", "12000kz", image5);

  return [item1, item2, item3, item4, item5];
};

export const createContent = () => {
  const content = document.createElement("div");
  document.body.appendChild(content);
  content.id = "content";

  return content;
};
