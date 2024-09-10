import * as _ from "lodash";
import "./style.sass";
import buildTools from "./data.json";

const title = document.querySelector(".title");
title.innerHTML = _.join(["Build", "Tools"], " ");

const mainContent = document.getElementById("mainContent");

function buildToolsListComponent() {
  buildTools.forEach((buildTool) => {
    const element = document.createElement("div");
    const img = document.createElement("img");
    img.src = require(`./images/${buildTool.image}`);
    img.alt = buildTool.name;

    const name = document.createElement("h4");
    name.textContent = buildTool.name;

    element.appendChild(img);
    element.appendChild(name);
    mainContent.appendChild(element);
  });
}

buildToolsListComponent();
