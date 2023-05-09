import React from "react";

export default function Score({ scoreName, scoreTime }) {
  return (
    <div className="Score">
      <h5>{scoreName}</h5>
      <h5>{scoreTime}</h5>
    </div>
  );
}
