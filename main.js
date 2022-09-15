const constant2and0 = (F, L, a) => {
  return ((F * (L - a)) / (6 * L)) * (L ** 2 - (L - a) ** 2);
};

const calcVRight = (F, L, a, x) => {
  const term1 = -((F * (L - a)) / L) * (x ** 3 / 6);

  const term2 = (F * (x - a) ** 3) / 6;

  const term3 = constant2and0(F, L, a) * x;

  return term1 + term2 + term3;
};

const calcVLeft = (F, L, a, x) => {
  const term1 = -((F * (L - a)) / L) * (x ** 3 / 6);

  const term2 = constant2and0(F, L, a) * x;

  return term1 + term2;
};
const calcAndPlot = (F, L, a) => {
  xArr = [];
  deflectionArr = [];
  for (x = 0; x < L; x += L / 100) {
    xArr.push(x);
    if (x < a) {
      deflectionArr.push(-calcVLeft(F, L, a, x));
    } else {
      deflectionArr.push(-calcVRight(F, L, a, x));
    }
  }
  xArr.push(L);
  deflectionArr.push(-calcVRight(F, L, a, L));

  graph = document.getElementById("graph");
  Plotly.newPlot(
    graph,
    [
      {
        x: xArr,
        y: deflectionArr,
      },
    ],
    {
      margin: { t: 0 },
      xaxis: { range: [0, 100] },
      yaxis: { range: [-220, 220] },
    },
    { staticPlot: true }
  );
};
const locationInput = document.querySelector("#location");
const forceInput = document.querySelector("#force");
locationInput.addEventListener("input", (e) => {
  document.querySelector("#locationOutput").innerHTML = e.target.value;
  refreshValues();
});
forceInput.addEventListener("input", (e) => {
  document.querySelector("#forceOutput").innerHTML = e.target.value;
  refreshValues();
});

const refreshValues = () => {
  const F = forceInput.value / 1000;
  const a = locationInput.value;
  L = 100;
  calcAndPlot(F, L, a);
};
