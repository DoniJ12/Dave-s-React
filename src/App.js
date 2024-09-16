import logo from "./logo.svg";
import "./App.css";

function App() {
  const names = ["Chaltu", "Abebe", "Kebede"];
  const ran = Math.floor(Math.random() * 3);
  const name = names[ran];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello {name}!</p>
        {/* <p>{name}</p> */}
      </header>
    </div>
  );
}

export default App;
