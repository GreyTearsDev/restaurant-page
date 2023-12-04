import { createMain, getDishes } from "./htlm-elements";

export default function loadMenu() {
  const main = createMain();
  const dishes = getDishes();
  main.id = "main-menu";
  dishes.forEach((dish) => main.appendChild(dish));
  return main;
}
