export const header = (function () {
  const header = document.createElement("header");
  return header;
})();

export default function loadPage(liElements, main, header) {
  const content = document.createElement("div");
  document.body.appendChild(content);
  content.id = "content";
  // content.removeChild(main);
  const ul = document.createElement("ul");
  liElements.forEach((name) => ul.appendChild(name));

  header.appendChild(ul);
  content.appendChild(header);
  console.log(main);
  content.appendChild(main);
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
