export default function loadPage() {
  const content = document.getElementById("content");
  const bgImage = document.createElement("img");

  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const navNames = ["Home", "Menu", "Contact"];

  const main = document.createElement("main");
  const title = document.createElement("h2");
  const description = document.createElement("p");
  const btnCallToAction = document.createElement("button");
  const mainElements = [title, description, btnCallToAction];

  content.appendChild(bgImage);

  header.appendChild(
    nav.appendChild(
      ul.appendChild(
        navNames.forEach((name) =>
          document
            .createElement("li")
            .appendChild(document.createTextNode(name))
        )
      )
    )
  );

  title.textContent = "Small, Affordable, Healthy Bites by the Shore";
  description.textContent =
    "Join us for an intimate culinary escape where the waves meet the plate and every bite is a moment to remember";

  bgImage.src = "../images/pexels-cottonbro-hero-6466.jpeg";
  bgImage.alt = "plate with boiled eggs";
  bgImage.classList.add("hero-image");

  mainElements.forEach((element) => main.appendChild(element));
}
