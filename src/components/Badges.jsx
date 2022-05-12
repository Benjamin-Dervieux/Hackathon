import React from "react";
import Loser from "../assets/loser.jpeg";
import Badge1 from "../assets/1.png";
import Badge2 from "../assets/2.png";
import Badge3 from "../assets/3.png";
import Badge4 from "../assets/4.png";
import Badge5 from "../assets/5.png";
import Badge6 from "../assets/6.png";
import Badge7 from "../assets/7.png";
import Badge8 from "../assets/8.png";

const badges = [
  Loser,
  Badge1,
  Badge2,
  Badge3,
  Badge4,
  Badge5,
  Badge6,
  Badge7,
  Badge8,
];
const scores = [200, 400, 600, 800, 1000, 1200, 1400, 1600];
const paliers = [
  "Palier 0",
  "Palier 1",
  "Palier 2",
  "Palier 3",
  "Palier 4",
  "Palier 5",
  "Palier 6",
  "Palier 7",
  "Palier 8",
];

function updatePaliers(palier) {
  if (palier < 200) return paliers[0];
  if (palier < 400) return paliers[1];
  if (palier < 600) return paliers[2];
  if (palier < 800) return paliers[3];
  if (palier < 1000) return paliers[4];
  if (palier < 1200) return paliers[5];
  if (palier < 1400) return paliers[6];
  if (palier < 1600) return paliers[7];
  if (palier > 1600) return paliers[8];
}

function updateBadges(score) {
  if (score < 200) return badges.Loser;
  if (score < 400) return badges.Badge1;
  if (score < 600) return badges.Badge2;
  if (score < 800) return badges.Badge3;
  if (score < 1000) return badges.Badge4;
  if (score < 1200) return badges.Badge5;
  if (score < 1400) return badges.Badge6;
  if (score < 1600) return badges.Badge7;
  if (score > 1600) return badges.Badge8;
}

export default function Badges() {
  return (
    <div className="dashboard">
      <h1>Tableau de bord</h1>
      <div className="paliers"></div>
    </div>
  );
}
