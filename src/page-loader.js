export default function loadPage(liElements, main) {
  const ul = document.createElement("ul");
  liElements.forEach((name) => ul.appendChild(name));

  const content = document.createElement("div");
  document.body.appendChild(content);
  content.id = "content";

  const header = document.createElement("header");

  console.log(main);

  header.appendChild(ul);
  content.appendChild(header);
  content.appendChild(main);
  return "hi";
}

export const navElements = (function () {
  const home = document.createElement("li");
  home.textContent = "Home";
  const menu = document.createElement("li");
  menu.textContent = "Menu";
  const contact = document.createElement("li");
  contact.textContent = "Contact";
  const liElements = [home, menu, contact];

  return liElements;
})();
