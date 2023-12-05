import { createMain, createContactInfo } from "./htlm-elements";

export default function loadContact() {
  const main = createMain();
  const contactInfo = createContactInfo();

  main.id = "contact-menu";
  main.appendChild(contactInfo);
  return main;
}
