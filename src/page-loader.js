import "./style.css";

export default function loadPage(main) {
  const content = document.createElement("div");
  document.body.appendChild(content);
  content.id = "content";

  const header = document.createElement("header");
  const ul = document.createElement("ul");
  const home = document.createElement("li");
  home.textContent = "Home";
  const menu = document.createElement("li");
  menu.textContent = "Menu";
  const contact = document.createElement("li");
  contact.textContent = "Contact";
  const liNames = [home, menu, contact];

  liNames.forEach((name) => ul.appendChild(name));

  header.appendChild(ul);
  content.appendChild(header);
  content.appendChild(main);

  return { home, menu, contact };
}
