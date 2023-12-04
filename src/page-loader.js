import { createHeader } from "./htlm-elements";

export default function loadPage(main) {
  const content = document.createElement("div");
  document.body.appendChild(content);
  content.id = "content";

  const header = createHeader();

  content.appendChild(header);
  content.appendChild(main);
}
