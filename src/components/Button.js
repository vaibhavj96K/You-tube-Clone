import React from "react";

function Button() {
  const buttons = [
    "All",
    "Live",
    "Cricket",
    "News",
    "Demo",
    "Latest",
    "New",
    "Liked",
    "Favourite",
    "All",
    "Live",
    "Cricket",
    "News",
    "Demo",
    "Latest",
    "New",
    "Liked",
  ];
  return (
    <div className="btns">
      {buttons.map((btn, ind) => (
        <button key={ind} className="buttons">
          {btn}
        </button>
      ))}
    </div>
  );
}

export default Button;
