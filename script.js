const firstinput = document.querySelector(".input-first");
const lastinput = document.querySelector(".input-last");
const select = document.querySelector("select");
const num = document.querySelector(".input-num");
const button = document.querySelector("button");
const scoreboard = document.querySelector(".scoreboard");
let arr = [];
let count = 0;

button.addEventListener("click", () => {
  const fullName = firstinput.value + " " + lastinput.value;
  const country = select.value;
  const score = Number(num.value);

  const playerObj = {
    id: ++count,
    name: fullName,
    country: country,
    score: score,
  };

  arr.push(playerObj);

  sortPlayers();
  showplayers();

  firstinput.value = "";
  lastinput.value = "";
  num.value = "";
  select.value = "placeholder";
});

function sortPlayers(order) {
  arr.sort((a, b) => b.score - a.score);
}

function showplayers() {
  scoreboard.innerHTML = "";

  arr.forEach((player) => {
    const name = document.createElement("span");
    name.textContent = player.name;

    const country = document.createElement("span");
    country.textContent = player.country;

    const score = document.createElement("span");
    score.textContent = player.score;

    const deleted = document.createElement("button");
    deleted.textContent = "Delete";

    const plusfive = document.createElement("button");
    plusfive.innerText = "+5";

    const minusfive = document.createElement("button");
    minusfive.innerText = "-5";

    const scorecard = document.createElement("p");
    scorecard.classList.add("displayscore");
    scorecard.append(name, country, score, deleted, plusfive, minusfive);

    deleted.addEventListener("click", () => {
      arr = arr.filter((p) => p.id !== player.id);
      showplayers();
    });

    plusfive.addEventListener("click", () => {
      player.score = player.score + 5;
      sortPlayers();
      showplayers();
    });

    minusfive.addEventListener("click", () => {
      if (player.score < 5) {
        alert("Score is less than 5");
      } else {
        player.score = Math.max(0, player.score - 5);
        sortPlayers();
        showplayers();
      }
    });

    scoreboard.append(scorecard);
  });
}
