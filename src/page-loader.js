import mainImage from "./assets/images/cottonbro.jpeg";
import "./style.css";

export default function loadPage() {
  const content = document.createElement("div");
  document.body.appendChild(content);
  content.id = "content";

  const bgImage = document.createElement("img");

  const header = document.createElement("header");

  const ul = document.createElement("ul");
  const liNames = ["Home", "Menu", "Contact"];

  const main = document.createElement("main");
  const title = document.createElement("h1");
  const description = document.createElement("p");
  const btnCallToAction = document.createElement("button");
  const mainElements = [bgImage, title, description, btnCallToAction];

  liNames.forEach((name) => {
    let liElement = document.createElement("li");
    liElement.textContent = name;
    ul.appendChild(liElement);
  });

  title.textContent = "Small, Affordable, Healthy Bites by the Shore";
  description.textContent =
    "Join us for an intimate culinary escape where the waves meet the plate and every bite is a moment to remember";

  bgImage.src = mainImage;
  bgImage.alt = "plate with boiled eggs";
  bgImage.id = "hero-image";

  header.appendChild(ul);

  mainElements.forEach((element) => main.appendChild(element));

  content.appendChild(header);
  content.appendChild(main);
  console.log(ul);
}
