import loadPage from "./page-loader";
import { header } from "./page-loader";
import { navElements } from "./page-loader";
import loadHome from "./home";
import loadMenu from "./menu";
import "./style.css";

(function () {
  const homeMain = loadHome();
  const menuMain = loadMenu();
  loadPage(navElements, homeMain, header);

  (function loadEventListeners() {
    const homeBtn = navElements[0];
    const menuBtn = navElements[1];
    const contactBtn = navElements[2];

    homeBtn.addEventListener("click", switchTo);
  })();

  function switchTo(event) {
    const content = document.getElementById("content");
    if (event.target.textContent === "Home") {
      content.removeChild(content.lastChild);
      loadPage(navElements, menuMain, header);
    }
  }
})();
// to do
/*
 3- make the header div fade in when the nav bar is hovered
 4- align content
 



 take the logic that creates the header and the main body and 
 put it into a file named page loader

 when the page first loads, it renders the content of the home file on the content-div


 when one of the header items is clicked, the user is redirected to the appropriate tab


 */
