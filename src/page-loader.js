import mainImage from "./assets/cottonbro.jpeg";

export default function loadPage() {
  const content = document.createElement("div");
  document.body.appendChild(content);
  content.id = "content";

  const bgImage = document.createElement("img");

  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const navNames = ["Home", "Menu", "Contact"];

  const main = document.createElement("main");
  const title = document.createElement("h2");
  const description = document.createElement("p");
  const btnCallToAction = document.createElement("button");
  const mainElements = [bgImage, title, description, btnCallToAction];

  navNames.forEach((name) =>
    ul.appendChild(
      document.createElement("li").appendChild(document.createTextNode(name))
    )
  );

  header.appendChild(nav.appendChild(ul));

  title.textContent = "Small, Affordable, Healthy Bites by the Shore";
  description.textContent =
    "Join us for an intimate culinary escape where the waves meet the plate and every bite is a moment to remember";

  bgImage.src = mainImage;
  bgImage.alt = "plate with boiled eggs";
  bgImage.classList.add("hero-image");

  mainElements.forEach((element) => main.appendChild(element));

  content.appendChild(header);
  content.appendChild(main);

  console.log(content);
}
