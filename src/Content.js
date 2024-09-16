import React from "react";

const Content = () => {
  const names = ["Chaltu", "Abebe", "Kebede"];
  const ran = Math.floor(Math.random() * 3);
  const name = names[ran];
  return (
    <main>
      <p>Hello {name}</p>
    </main>
  );
};

export default Content;
