import mainImage from "./assets/images/cottonbro.jpeg";
import { createBgImage, createMain, createInfoElement } from "./htlm-elements";

export default function loadHome() {
  const homeInfoContainer = createInfoElement();
  const main = createMain();
  const bgImage = createBgImage();
  const mainElements = [bgImage, homeInfoContainer];
  mainElements.forEach((element) => main.appendChild(element));
  return main;
}
