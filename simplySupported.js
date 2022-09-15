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

const simpleCalcAndPlot = (F, L, a) => {
  const xArr = [];
  const deflectionArr = [];
  for (let x = 0; x < L; x += L / 100) {
    xArr.push(x);
    if (x < a) {
      deflectionArr.push(-calcVLeft(F, L, a, x));
    } else {
      deflectionArr.push(-calcVRight(F, L, a, x));
    }
  }
  xArr.push(L);
  deflectionArr.push(-calcVRight(F, L, a, L));

  Plotly.newPlot(
    "simple-graph",
    [
      {
        x: xArr,
        y: deflectionArr,
        line: { width: 6 },
      },
    ],
    {
      margin: { t: 0 },
      xaxis: { range: [0, 100] },
      yaxis: { range: [-220, 220] },
      annotations: [
        {
          x: a,
          y: deflectionArr[a],
          text: "🚛",
          font: {
            size: 40,
          },
          fontsize: 100,
          yshift: 20,
          showarrow: false,
        },
      ],
    },
    { staticPlot: true }
  );
};

export default simpleCalcAndPlot;
