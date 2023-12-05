import image1 from "/src/assets/images/antoni-shkraba.jpeg";
import image2 from "/src/assets/images/pexels-valeria-boltneva.jpeg";
import image3 from "/src/assets/images/alberta-studios.jpeg";
import image4 from "/src/assets/images/geraud-pfeiffer.jpeg";
import image5 from "/src/assets/images/marina-leonova.jpeg";
import image6 from "/src/assets/images/karolina-grabowska.jpeg";

export const createBgImage = (image, alt) => {
  const bgImage = document.createElement("img");

  bgImage.src = image;
  bgImage.alt = alt;
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
  const item1 = menuItem("Avocato Toast", "5.300kz", image1);
  const item2 = menuItem("Octopus Soup", "12.000kz", image2);
  const item3 = menuItem("Alberta Pizza", "9.500kz", image3);
  const item4 = menuItem("BBQ Pork", "15.000kz", image4);
  const item5 = menuItem("Pizza Basilicata", "12.000kz", image5);
  const item6 = menuItem("Lamb à Pombé", "8.000kz", image6);

  return [item1, item2, item3, item4, item5, item6];
};

export const createContent = () => {
  const content = document.createElement("div");
  document.body.appendChild(content);
  content.id = "content";

  return content;
};

export const createContactInfo = () => {
  const body = document.createElement("div");
  const title = document.createElement("h3");
  const email = document.createElement("p");
  const phone = document.createElement("p");
  const address = document.createElement("p");
  const gitHub = document.createElement("p");
  const gitLink = document.createElement("a");
  const bodyElements = [title, email, phone, address, gitHub];

  title.textContent = "Contact us";
  title.id = "contact-title";

  email.textContent = "Email: o@kazukuta.com";
  phone.textContent = "Phone: +244 999 888 777";
  address.textContent = "Address: Fancy Av, Cool City - P.O  Box 404";
  gitHub.textContent = "GitHub: ";

  gitLink.href = "https://github.com/GreyTearsDev";
  gitLink.textContent = "@GreyTearsDev";
  gitHub.appendChild(gitLink);

  body.id = "info-body";
  bodyElements.forEach((element) => {
    element.className = "contact-text";
    body.appendChild(element);
  });

  return body;
};
