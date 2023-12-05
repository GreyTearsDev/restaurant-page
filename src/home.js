import mainImage from "/src/assets/images/burak-the-weekender.jpeg";
import { createBgImage, createMain, createInfoElement } from "./htlm-elements";

export default function loadHome() {
  const homeInfoContainer = createInfoElement();
  const main = createMain();
  main.id = "main-home";
  const bgImage = createBgImage(mainImage, "plate with boiled eggs");
  const mainElements = [bgImage, homeInfoContainer];
  mainElements.forEach((element) => main.appendChild(element));
  return main;
}
