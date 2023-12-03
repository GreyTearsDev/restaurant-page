import mainImage from "./assets/images/cottonbro.jpeg";

export default function loadMenu() {
  const main = document.createElement("main");
  const bgImage = document.createElement("img");

  bgImage.src = mainImage;
  bgImage.alt = "plate with boiled eggs";
  bgImage.id = "hero-image";
  bgImage.style.filter = "blur(10px)";

  main.appendChild(bgImage);
  return main;
}

const menuItem = function createMenuItem(name, price, imageSrc) {
  const imageElement = document.createElement("img");
  const nameElement = document.createElement("p");
  const priceElement = document.createElement("h4");
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

  itemBody.appendChild(imageElement);
  itemBody.appendChild(namePriceContainer);

  return { imageElement, nameElement, priceElement };
};

const test = menuItem("me", 20, mainImage);
