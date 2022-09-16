import simpleCalcAndPlot from "./simplySupported.js";
import cantileverCalcAndPlot from "./cantilever.js";

const locationInput = document.querySelector("#location");
const forceInput = document.querySelector("#force");

const inputs = document.querySelectorAll(".parameter-input");
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    document.querySelector(`#${input.id}Output`).innerHTML = e.target.value;
    refreshValues(e.target.id.split("-")[0]);
  });
});

const refreshValues = (type) => {
  switch (type) {
    case "simple":
      simpleCalcAndPlot(
        document.querySelector("#simple-force").value / 1000,
        100,
        document.querySelector("#simple-location").value
      );
      break;

    case "cantilever":
      cantileverCalcAndPlot(
        document.querySelector("#cantilever-force").value / 1000000
      );
      break;

    default:
      console.error("Unknown type");
      break;
  }
};

refreshValues("simple");
refreshValues("cantilever");
