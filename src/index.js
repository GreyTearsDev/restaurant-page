import loadPage from "./page-loader";
import loadHome from "./home";
import loadMenu from "./menu";
import { createHeader } from "./htlm-elements";
import { createContent } from "./htlm-elements";
import "./style.css";

(function () {
  const content = createContent();
  const header = createHeader();
  const homeMain = loadHome();
  const menuMain = loadMenu();
  content.appendChild(header);
  content.appendChild(homeMain);
  // loadPage(homeMain);

  const navElements = document.querySelectorAll("li");
  navElements.forEach((li) => li.addEventListener("click", switchTo));

  function switchTo(event) {
    console.log("tete");
    switch (event.target.textContent) {
      case "Home":
        content.removeChild(content.lastChild);
        content.appendChild(homeMain);
        break;
      case "Menu":
        content.removeChild(content.lastChild);
        content.appendChild(menuMain);
        break;
      case "Contact":
        loadPage(contactMain);
        break;
    }
  }
})();

// to do
/*
 1- refactor the loadmenu function 
 2- write the code for the contact page (add the names of the photo owners)
 3- write the code for the galery
 4


 */
