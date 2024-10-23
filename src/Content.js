import { useState } from "react";



const Content = () => {
  const [name, setName] = useState('Doni');

  const handleNameChange = () => {
    const names = ["Chaltu", "Abebe", "Kebede"];
    const ran = Math.floor(Math.random() * 3);
    setName(names[ran]);
  }
  function handleClick(e) {
 
      e.target.innerText = "Done!";
    

    // let text = e;
    // console.log(text);
    // text.target.innerText = "Abebe";
  }
  const handleClick2 = (name) => {
    console.log(`${name} was clicked`)
  }
  const handleClick3 = (e) => {
    console.log(e.target.innerText)
  }
  return (
    <main>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={() => handleClick2('Doni')}>click2</button>
      <button onClick={(e) => handleClick3(e)}>click3</button>
      <p>Hello {name}</p>
    </main>
  );
};

export default Content;
