const players = [
  {
    name: "Marlowww",
    points: 450,
    rank: 1,
    tiers: ["HT1", "LT1", "HT1", "LT1"]
  },
  {
    name: "ItzRealMe",
    points: 330,
    rank: 2,
    tiers: ["HT3", "HT1", "LT2"]
  },
  {
    name: "coldified",
    points: 326,
    rank: 3,
    tiers: ["LT1", "HT1", "LT2"]
  },
  {
    name: "Swight",
    points: 290,
    rank: 4,
    tiers: ["HT3", "LT3", "HT1"]
  }
];

const leaderboard = document.getElementById("leaderboard");

players.forEach(player => {
  const div = document.createElement("div");
  div.classList.add("player");

  div.innerHTML = `
    <div class="rank">#${player.rank}</div>
    <div class="name">
      ${player.name}<br>
      <span class="points">${player.points} points</span>
    </div>
    <div class="tiers">
      ${player.tiers.map(t => `<span>${t}</span>`).join("")}
    </div>
  `;

  leaderboard.appendChild(div);
});
