import React from "react";
import Badges from "../components/Badges";
import "./tableauBord.css";

import Historique from "../components/Historique";
import "./tableauBord.css";

function TableauBord() {
  return (
    <div>
      <div className="badge">
        <Badges />
      </div>
      <Historique />
    </div>
  );
}

export default TableauBord;
