import React from "react";

const Content = () => {
  const names = ["Chaltu", "Abebe", "Kebede"];
  const ran = Math.floor(Math.random() * 3);
  const name = names[ran];

  function handleClick(e) {
    if (e.target.innerText === "Click") {
      e.target.innerText = "Done!";
    } else {
      e.target.innerText = "Click";
    }
    // let text = e;
    // console.log(text);
    // text.target.innerText = "Abebe";
  }
  return (
    <main>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Click
      </button>
      <p>Hello {name}</p>
    </main>
  );
};

export default Content;
