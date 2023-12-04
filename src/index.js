import loadPage from "./page-loader";
import { header } from "./page-loader";
import loadHome from "./home";
import loadMenu from "./menu";
import { createNavElements } from "./htlm-elements";
import "./style.css";

(function () {
  const homeMain = loadHome();
  const menuMain = loadMenu();
  const contactMain = loadMenu();
  const galleryMain = loadMenu();
  const navElements = createNavElements();

  loadPage(homeMain);

  (function loadEventListeners() {
    navElements.forEach((liElement) =>
      liElement.addEventListener("click", switchTo)
    );
  })();

  function switchTo(event) {
    const content = document.getElementById("content");
    document.body.removeChild(content);

    switch (event.target.textContent) {
      case "Home":
        loadPage(homeMain);
        break;
      case "Menu":
        loadPage(menuMain);
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
