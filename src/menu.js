import image1 from "/src/assets/images/antoni-shkraba.jpeg";
import image2 from "/src/assets/images/karthik-reddy.jpeg";
import image3 from "/src/assets/images/alberta-studios.jpeg";
import image4 from "/src/assets/images/gustavo-peres..jpeg";
import image5 from "/src/assets/images/marina-leonova.jpeg";

export default function loadMenu() {
  const main = document.createElement("main");
  main.id = "main-menu";

  const item1 = menuItem("Avocato Toast", "5300kz", image1);
  const item2 = menuItem("Pancake Caroline", "4500kz", image2);
  const item3 = menuItem("Alberta Pizza", "9500kz", image3);
  const item4 = menuItem("Family BBQ", "15000kz", image4);
  const item5 = menuItem("Pizza Basilicata", "12000kz", image5);

  const dishes = [item1, item2, item3, item4, item5];

  dishes.forEach((dish) => main.appendChild(dish));
  return main;
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
