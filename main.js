const $ = (el) => document.querySelector(el);

const data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

let max = 0;
let max_i = -1;
for (let n = 1; n <= 7; n++) {
  if (data[n - 1].amount > max) {
    max = data[n - 1].amount;
    max_i = n - 1;
  }
  $(`.bar-div:nth-of-type(${n}) .bar`).style.height =
    data[n - 1].amount * 2 + "px";
  $(`.bar-div:nth-of-type(${n}) .bar-top`).textContent =
    "$" + data[n - 1].amount;
}

$(`.bar-div:nth-of-type(${max_i + 1}) .bar`).classList.add("max-bar");
