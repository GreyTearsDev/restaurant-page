import loadPage from "./page-loader";
import { navElements } from "./page-loader";
import loadHome from "./home";
import "./style.css";

console.log();

loadPage(navElements, loadHome());

// to do
/*
 3- make the header div fade in when the nav bar is hovered
 4- align content
 



 take the logic that creates the header and the main body and 
 put it into a file named page loader

 when the page first loads, it renders the content of the home file on the content-div


 when one of the header items is clicked, the user is redirected to the appropriate tab


 */
