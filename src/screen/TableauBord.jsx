import React from "react";
import Badges from "../components/Badges";
import "./tableauBord.css";
import Historique from "../components/Historique";

function TableauBord() {
  return (
    <div className="bord">
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
