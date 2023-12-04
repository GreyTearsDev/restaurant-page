import { createHeader } from "./htlm-elements";
import { createContent } from "./htlm-elements";

export default function loadPage(main) {
  const content = createContent();
  const header = createHeader();

  content.appendChild(header);
  content.appendChild(main);
  // document.body.appendChild(content);
}
