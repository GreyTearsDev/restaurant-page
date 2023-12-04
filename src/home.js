import { createBgImage, createMain, createInfoElement } from "./htlm-elements";

export default function loadHome() {
  const homeInfoContainer = createInfoElement();
  const main = createMain();
  main.id = "main-home";
  const bgImage = createBgImage();
  const mainElements = [bgImage, homeInfoContainer];
  mainElements.forEach((element) => main.appendChild(element));
  return main;
}
