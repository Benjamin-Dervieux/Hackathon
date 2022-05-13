import React from "react";
import Badges from "../components/Badges";
import "./tableauBord.css";
import Historique from "../components/Historique";
import Point from "../components/Point";

function TableauBord() {
  return (
    <div className="bord">
      <Point />
      <div className="badge">
        <Badges />
      </div>
      <div className="historique">
        <Historique />
      </div>
    </div>
  );
}

export default TableauBord;
