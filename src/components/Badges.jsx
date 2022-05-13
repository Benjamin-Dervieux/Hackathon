import React from "react";
import "./badges.css";
import Badge1 from "../assets/1.png";
import Badge2 from "../assets/2.png";
import Badge3 from "../assets/3.png";
import Badge4 from "../assets/4.png";
import Badge5 from "../assets/5.png";
import Badge6 from "../assets/6.png";
import Badge7 from "../assets/7.png";
import Badge8 from "../assets/8.png";
import Badge1B from "../assets/1black.png";
import Badge2B from "../assets/2back.png";
import Badge3B from "../assets/3back.png";
import Badge4B from "../assets/4back.png";
import Badge5B from "../assets/5back.png";
import Badge6B from "../assets/6back.png";
import Badge7B from "../assets/7back.png";
import Badge8B from "../assets/8back.png";

const score = 1800;
const badges = [
  Badge1,
  Badge1B,
  Badge2,
  Badge2B,
  Badge3,
  Badge3B,
  Badge4,
  Badge4B,
  Badge5,
  Badge6,
  Badge6B,
  Badge7,
  Badge7B,
  Badge8,
  Badge8B,
];

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

function updateBadges(score, index) {
  if (index === 0) {
    return score > 200 ? (
      <img src={Badge1} alt="badge1" />
    ) : (
      <img src={Badge1B} alt="badge1-grisé" />
    );
  }
  if (index === 1) {
    return score > 400 ? (
      <img src={Badge2} alt="badge2" />
    ) : (
      <img src={Badge2B} alt="badge2-grisé" />
    );
  }
  if (index === 2) {
    return score > 600 ? (
      <img src={Badge3} alt="badge3" />
    ) : (
      <img src={Badge3B} alt="badge3-grisé" />
    );
  }
  if (index === 3) {
    return score > 800 ? (
      <img src={Badge4} alt="badge4" />
    ) : (
      <img src={Badge4B} alt="badge4-grisé" />
    );
  }
  if (index === 4) {
    return score > 1000 ? (
      <img src={Badge5} alt="badge5" />
    ) : (
      <img src={Badge5B} alt="badge5-grisé" />
    );
  }
  if (index === 5) {
    return score > 1200 ? (
      <img src={Badge6} alt="badge6" />
    ) : (
      <img src={Badge6B} alt="badge6-grisé" />
    );
  }
  if (index === 6) {
    return score > 1400 ? (
      <img src={Badge7} alt="badge7" />
    ) : (
      <img src={Badge7B} alt="badge7-grisé" />
    );
  }
  if (index === 7) {
    return score > 1600 ? (
      <img src={Badge8} alt="badge8" />
    ) : (
      <img src={Badge8B} alt="badge8-grisé" />
    );
  }
}

export default function Badges() {
  return (
    <div className="dashboard">
      <h1 className="title">Tableau de bord</h1>

      <div className="paliers">
        <div>{paliers[7]}</div>
        <div>{updatePaliers(score)}</div>
      </div>
      <div className="container-progress">
        <div class="progressBarContainer">
          <div class="progressBar"></div>
        </div>
      </div>

      <div className="allBadges">
        <ul className="baba">
          {badges.map((badge, index) => (
            <li key={index}>{updateBadges(score, index)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
