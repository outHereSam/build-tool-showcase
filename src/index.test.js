/**
 * @jest-environment jsdom
 */

const _ = require("lodash");
const buildTools = require("./data.json");

// Mock lodash
jest.mock("lodash", () => ({
  join: jest.fn(() => "Build Tools"),
}));

// Mock the image imports
jest.mock("./images/webpack.png", () => "mocked-webpack-image", {
  virtual: true,
});
jest.mock("./images/parcel.png", () => "mocked-parcel-image", {
  virtual: true,
});
jest.mock("./images/rollup.png", () => "mocked-rollup-image", {
  virtual: true,
});

describe("Build Tools Component", () => {
  beforeEach(() => {
    // Set up our document body
    document.body.innerHTML = `
      <div class="title"></div>
      <div id="mainContent"></div>
    `;

    // Clear all mocks before each test
    jest.clearAllMocks();

    // Require the module under test
    require("./index.js");
  });

  test("title is set correctly", () => {
    expect(_.join).toHaveBeenCalledWith(["Build", "Tools"], " ");
    expect(document.querySelector(".title").innerHTML).toBe("Build Tools");
  });

  test("buildToolsListComponent creates correct number of elements", () => {
    const mainContent = document.getElementById("mainContent");
    expect(mainContent.children.length).toBe(buildTools.length);
  });

  test("buildToolsListComponent creates elements with correct content", () => {
    const mainContent = document.getElementById("mainContent");
    buildTools.forEach((buildTool, index) => {
      const element = mainContent.children[index];
      expect(element.querySelector("img").src).toContain(
        `mocked-${buildTool.name.toLowerCase()}-image`
      );
      expect(element.querySelector("img").alt).toBe(buildTool.name);
      expect(element.querySelector("h4").textContent).toBe(buildTool.name);
    });
  });
});
