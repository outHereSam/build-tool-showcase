import * as _ from "lodash";
import "./style.sass";
import Data from "./data.json";

function component() {
  const heading = document.createElement("h1");
  const content = document.createElement("div");

  heading.innerHTML = _.join(["Hello", "webpack"], " ");
  heading.classList.add("hello");

  Data.forEach((product) => {
    const element = document.createElement("p");
    element.innerHTML = product.name;
    content.appendChild(element);
  });

  return content;
}

document.body.appendChild(component());
