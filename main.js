const constant2and0 = (F, L, a) => {
  return ((F * (L - a)) / (6 * L)) * (L ** 2 - (L - a) ** 2);
};

const calcVRight = (F, L, a, x) => {
  const term1 = -((F * (L - a)) / L) * (x ** 3 / 6);

  const term2 = (F * (x - a) ** 3) / 6;

  const term3 = constant2and0(F, L, a) * x;

  return term1 + term2 + term3;
};

calcVLeft = (F, L, a, x) => {
  const term1 = -((F * (L - a)) / L) * (x ** 3 / 6);

  const term2 = constant2and0(F, L, a) * x;

  return term1 + term2;
};

xArr = [];
deflectionArr = [];
const F = 10;
const L = 10;
const a = 5;
for (x = 0; x < L; x += L / 1000) {
  xArr.push(x);
  if (x < a) {
    deflectionArr.push(-calcVLeft(F, L, a, x));
  } else {
    deflectionArr.push(-calcVRight(F, L, a, x));
  }
}

TESTER = document.getElementById("tester");
Plotly.newPlot(
  TESTER,
  [
    {
      x: xArr,
      y: deflectionArr,
    },
  ],
  {
    margin: { t: 0 },
  }
);
