const calcV = (F, L, x) => {
  return (F * x ** 2 * (x - 3 * L)) / 6;
};

const cantileverCalcAndPlot = (F) => {
  const xArr = [];
  const deflectionArr = [];
  const L = 100;
  for (let x = 0; x < L; x += L / 100) {
    xArr.push(x);
    deflectionArr.push(calcV(F, L, x));
  }
  xArr.push(L);
  deflectionArr.push(calcV(F, L, L));
  Plotly.newPlot(
    "cantilever-graph",
    [
      {
        x: xArr,
        y: deflectionArr,
        line: { width: 6 },
      },
    ],
    {
      margin: { t: 0 },
      xaxis: { range: [0, 100], showticklabels: false },
      yaxis: {
        range: [-40, 40],
        zeroline: false,
        showgrid: true,
        showticklabels: false,
      },
      annotations: [
        {
          x: 100,
          y: deflectionArr[deflectionArr.length - 1],
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

export default cantileverCalcAndPlot;
